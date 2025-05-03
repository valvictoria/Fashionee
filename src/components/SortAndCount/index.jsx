const SortAndCount = ({ products, setSortOrder }) => {
    return (
        <div className='sort-and-count'>
            <div className='products-count'>
                There are <span className='bold'>{products.length}</span> products in this category
            </div>
            <div className='sort'>
                <select
                    className='input'
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value='RELEVANCE'>By relevance</option>
                    <option value='ASC'>A-Z</option>
                    <option value='DESC'>Z-A</option>
                </select>
            </div>
        </div>
    )
}

export default SortAndCount