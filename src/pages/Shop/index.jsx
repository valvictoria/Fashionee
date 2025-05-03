import { useFilters } from '../../context/FiltersContext'

import Newsletter from '../../components/Newsletter'
import Showcase from '../../components/Showcase'
import Sidebar from '../../components/Sidebar'

import './style.css'


const Shop = () => {
    const { filters, dispatch } = useFilters()

    return (
        <>
            <div className='container'>
                <div className='showcase-container'>
                    <div className='shop'>
                        <Sidebar />
                        <Showcase filters={filters}/>
                    </div>            
                </div>
            </div>           
            <Newsletter />
        </>
    )
}

export default Shop