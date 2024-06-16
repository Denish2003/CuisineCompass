import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: [true, "can't be blank"]},
    image: { type: String, required: [true, "can't be blank"]},
    calories: { type: Number, required: [true, "can't be blank"]},
    ingredients: { type: Array, required: [true, "can't be blank"]},
    instructions: { type: Array, required: [true, "can't be blank"]},
});

const Recipe = mongoose.model('Recipe', recipeSchema);