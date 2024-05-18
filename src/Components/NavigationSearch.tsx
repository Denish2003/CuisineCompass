import { useState, useEffect } from 'react';
import './NavigationSearch.css';
import { useSearch } from './SearchContext';

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
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="\">Cuisine Compass</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
        </nav>
    );
}

export default NavigationSearch;