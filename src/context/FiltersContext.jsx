import { createContext, useReducer, useContext } from "react";

const initialState = {
    category: 'All',
    price: {
        min: 0,
        max: 9999999
    },
    color: []
}

const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORY': 
            return {...state, category: action.payload}
        case 'SET_PRICE': 
            return {...state, price: action.payload}
        case 'SET_COLOR': 
            return {...state, color: action.payload}
        case 'SET_SEARCH': 
            return {...state, search: action.payload}
        case 'RESET_FILTERS': 
            return initialState
        default: 
            return state
    }
}

const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
    const [filters, dispatch] = useReducer(filterReducer, initialState)

    return (
        <FiltersContext.Provider value={{ filters, dispatch }}>
            {children}
        </FiltersContext.Provider>
    )
} 

export const useFilters = () => {
    return useContext(FiltersContext)
}