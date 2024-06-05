import { useState, useEffect } from 'react';
import { useSearch } from './SearchContext';
import testData from './TestDataset.json';
import MenuItem from "./MenuItem";
import "./MainContent.css";

interface Recipe {
    recipeName: string;
    image: string;
    calories: number;
}

function MainContent() {
    const { searchTerm } = useSearch();
    const { setSearchTerm } = useSearch();
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        setSearchTerm(search);
    }, [search, setSearchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className="main-content">
            <div className="search-bar">
                <form className="d-flex w-50" role="search">
                    <input 
                        className="form-control me-2 custom-search" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        value={search}
                        onChange={handleSearchChange} 
                    />
                    <button className="search-button" type="submit"><span className="bi bi-search search-icon"></span></button>
                </form>
            </div>

            <img className="landing-page-image" src=".\\src\\Images\\MainScreen.jpg"></img>
            <h1 className="heading" id="heading">Our Latest Recipes</h1>

            <div className="grid-container">
                {testData.filter((recipe: Recipe) => {
                    return searchTerm.toLowerCase() === '' 
                    ? recipe 
                    : recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase());
                }).map((recipe: Recipe) => (
                    <MenuItem key={recipe.recipeName} 
                            recipeName={recipe.recipeName} 
                            image={recipe.image} 
                            calories={recipe.calories} />
                ))}
            </div>
        </div>
    );
}

export default MainContent;
