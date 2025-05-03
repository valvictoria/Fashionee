import { useState, useEffect, useMemo } from 'react';
import { useFilters } from '../../../context/FiltersContext'
import data from '../../../products.json';
import {
    PRODUCTS_PER_PAGE,
    filterProducts,
    sortProducts,
    paginateProducts
} from '../../../utils/showcaseUtils';

export const useShowcaseLogic = () => {
    const { filters } = useFilters()
    const [sortOrder, setSortOrder] = useState('RELEVANCE')
    const [currentPage, setCurrentPage] = useState(0)
    const [sortedProducts, setSortedProducts] = useState([])

    const filteredProducts = useMemo(() => {
        return filterProducts(data.products, filters)
    }, [filters])

    useEffect(() => {
        const sorted = sortProducts(filteredProducts, sortOrder)
        setSortedProducts(sorted)
    }, [sortOrder, filteredProducts])

    const { paginated: paginatedProducts, totalPages } = useMemo(() => {
        return paginateProducts(sortedProducts, currentPage)
    }, [sortedProducts, currentPage])

    return {
        sortOrder,
        setSortOrder,
        currentPage,
        setCurrentPage,
        sortedProducts,
        paginatedProducts,
        totalPages,
        PRODUCTS_PER_PAGE
    }
}