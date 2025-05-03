import { useFilters } from "../../context/FiltersContext"

const Search = () => {
    const { dispatch } = useFilters()

    const handleSearchChange = (event) => {
        dispatch({ type: 'SET_SEARCH', payload: event.target.value })
    }

    return (
        <div className='search'>
            <label>
                <input type='text' 
                    placeholder='Search' 
                    className='input search-row'
                    onChange={handleSearchChange} />
                <img src='./icons/search.svg' alt='Search Icon' className='search-icon' />
            </label>
        </div>
    )
}

export default Search