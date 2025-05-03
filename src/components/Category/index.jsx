const Category = ({ tempFilters, setTempFilters }) => {
    const categories = ['All', 'Men', 'Women', 'Accessories', 'New Arrivals']

    const handleCategoryChange = (category) => {
        if (tempFilters.category === category) {
            setTempFilters((prev) => ({ ...prev, category: 'All' }))
        } else {
            setTempFilters((prev) => ({ ...prev, category }))
        }
    }

    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Categories</div>
            <div className='sidebar-content'>
                <ul className='custom-list'>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className={`item ${tempFilters.category === category ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Category