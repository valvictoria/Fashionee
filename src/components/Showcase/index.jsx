import { useShowcaseLogic } from './hooks/useShowcaseLogic'
import ProductInfo from '../ProductInfo'
import SortAndCount from '../SortAndCount'
import Pagination from '../Pagination'

import './style.css'

const Showcase = () => {

    const {
        sortOrder,
        setSortOrder,
        currentPage,
        setCurrentPage,
        sortedProducts,
        paginatedProducts,
        totalPages
    } = useShowcaseLogic()

    return (
        <div className='products-wrapper'>
            <SortAndCount products={sortedProducts} 
                setSortOrder={setSortOrder} />

            <div className='products'>
                {paginatedProducts.map((product) => (
                    <ProductInfo key={product.id} product={product} />
                ))}
            </div>

            <Pagination currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} />
        </div>
    )
}

export default Showcase