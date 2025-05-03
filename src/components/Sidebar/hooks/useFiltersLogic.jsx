import { useState, useEffect } from 'react';
import { useFilters } from '../../../context/FiltersContext';

export const useFiltersLogic = () => {
    const { filters, dispatch } = useFilters()
    const [tempFilters, setTempFilters] = useState({
        category: filters.category,
        color: filters.color,
        price: filters.price
    })
    const [isFilterActive, setIsFilterActive] = useState(false)

    useEffect(() => {
        const isCategoryChanged = tempFilters.category !== filters.category;
        const isColorChanged = JSON.stringify(tempFilters.color) !== JSON.stringify(filters.color)
        const isPriceChanged = JSON.stringify(tempFilters.price) !== JSON.stringify(filters.price)

        setIsFilterActive(isCategoryChanged || isColorChanged || isPriceChanged)
    }, [tempFilters, filters])
    
    const applyFilters = () => {
        dispatch({ type: 'SET_CATEGORY', payload: tempFilters.category })
        dispatch({ type: 'SET_COLOR', payload: tempFilters.color })
        dispatch({ type: 'SET_PRICE', payload: tempFilters.price })
    }

    return {
        tempFilters,
        setTempFilters,
        isFilterActive,
        applyFilters
    }
}