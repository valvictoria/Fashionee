export const PRODUCTS_PER_PAGE = 12

export const filterProducts = (products, filters) => {
    return products.filter(product => {
        // Фильтр по категории
        if (filters.category !== 'All' && !product.categories.includes(filters.category)) {
            return false
        }
        
        // Фильтр по цене
        const minPrice = filters.price.min || 0;
        const maxPrice = isNaN(filters.price.max) ? 9999999 : filters.price.max;
        if (product.price < minPrice || product.price > maxPrice) {
            return false
        }
        
        // Фильтр по цвету
        if (filters.color.length > 0 && !filters.color.includes(product.color)) {
            return false
        }
        
        // Фильтр по поиску
        if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
            return false
        }
        
        return true
    })
}

export const sortProducts = (products, sortOrder) => {
    const sorted = [...products]
    
    if (sortOrder === 'ASC') {
        sorted.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortOrder === 'DESC') {
        sorted.sort((a, b) => b.name.localeCompare(a.name))
    }
    
    return sorted;
}

export const paginateProducts = (products, currentPage) => {
    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE)
    const paginated = products.slice(
        currentPage * PRODUCTS_PER_PAGE,
        (currentPage + 1) * PRODUCTS_PER_PAGE
    )
    
    return { paginated, totalPages }
}