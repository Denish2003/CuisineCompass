import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    label: { type: String, required: [true, "can't be blank"]},
    image: { type: String, required: [true, "can't be blank"]},
    calories: { type: Number, required: [true, "can't be blank"]},
    dietLabels: { type: Array, required: [true, "can't be blank"]},
    healthLabels: { type: Array, required: [true, "can't be blank"]},
    mealType: { type: Array, required: [true, "can't be blank"]},
    dishType: { type: Array, required: [true, "can't be blank"]},
    cuisineType: { type: Array, required: [true, "can't be blank"]},
    ingredients: { type: Array, required: [true, "can't be blank"]},
    instructions: { type: Array, required: [true, "can't be blank"]},
});

const Recipe = mongoose.model('Recipe', recipeSchema);