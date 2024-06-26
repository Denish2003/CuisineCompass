import { useState, useEffect } from 'react';
import { useSearch } from './SearchContext';
import './NavigationSearch.css';
import "./MainContent.css";

function NavigationSearch() {
    const { setSearchTerm } = useSearch();
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        setSearchTerm(search);
    }, [search, setSearchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
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
    );
}

export default NavigationSearch;