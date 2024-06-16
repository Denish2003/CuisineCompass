import mongoose, { Schema, model, Document, Model, HydratedDocument } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface IUser extends Document {
  first_name: string,
  last_name: string,
  username: string,
  email: string,
  password: string,
  tokens: { token: string }[],
}

export interface IUserMethods {
  generateAuthToken(): Promise<string>
  toJSON(): IUser
}

interface UserModel extends Model<IUser, {}, IUserMethods> {
  findByCredentials(username: string, password: string): Promise<HydratedDocument<IUser, IUserMethods>>
}

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: [true, "can't be blank"]},
  last_name: { type: String, required: [true, "can't be blank"]},
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, pattern:"[a-z0-5]{8,}", required: [true, "can't be blank"] },
  tokens: [{ token: { type: String, required: true } }],
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 8);
  }
  next()
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET! as string);
  user.token = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.methods.toJSON = function() {
  const user = this as IUser;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username })
  if (!user) {
    return null
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return null
  }
  return user
}

const User = model<IUser, UserModel>('User', userSchema)

export default User;