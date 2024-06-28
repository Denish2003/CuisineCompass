export interface Recipe {
    label: string;
    image: string;
    calories: number;
    dietLabels: string[];
    healthLabels: string[];
    mealType: string[];
    dishType: string[];
    cuisineType: string[];
    ingredients: string[];
    instructions: string[];
}

export interface RecipeProps {
    recipes: Recipe[];
}