export interface Recipe {
    label: string;
    image: string;
    calories: number;
    ingredients: string[];
    instructions: string[];
}

export interface RecipeProps {
    recipes: Recipe[];
}