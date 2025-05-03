import { useFiltersLogic } from './hooks/useFiltersLogic'
import data from '../../products.json'

import ApplyFilter from '../ApplyFilter'
import Category from '../Category'
import Color from '../Color'
import Price from '../Price'
import ReviewedByYou from '../ReviewedByYou'
import Search from '../Search'
import SeasonSaleBanner from '../SeasonSaleBanner'

import './style.css'

const Sidebar = () => {
    const {
        tempFilters,
        setTempFilters,
        isFilterActive,
        applyFilters
    } = useFiltersLogic()

    return (
        <div className='sidebar'>
            <Search />
            <Category tempFilters={tempFilters} setTempFilters={setTempFilters}/>
            <Price />
            <Color tempFilters={tempFilters} setTempFilters={setTempFilters}/>
            <ApplyFilter isFilterActive={isFilterActive}
                applyFilters={applyFilters}/>
            <ReviewedByYou data={data} />
            <SeasonSaleBanner />
        </div>
    )
}

export default Sidebar