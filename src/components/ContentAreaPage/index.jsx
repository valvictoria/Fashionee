import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import '../ContentAreaPage/style.css'

const ContentAreaPage = ({ setPage }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const activePage = location.pathname === '/cart' ? 'Cart' : 'Shop'

    const handlePageChange = (page) => {
        navigate(page === 'Shop' ? '/shop' : '/cart')
    }

    return (
        <div className='page-title-container'>
            <div className='content-title'>
                <div className='header-points'>
                    <img src='./image/points-header.svg' alt='' />
                </div>
                <div className='main-title'>
                    <div className='title'>{activePage}</div>
                    <div className='section-wrapper'>
                        <div className='vertical-line'></div>
                        <div className='section-item'>Home</div>
                        <div
                            className={`section-item ${activePage === 'Shop' ? 'active' : ''}`}
                            onClick={() => handlePageChange('Shop')}
                        >
                            Shop
                        </div>
                        <div
                            className={`section-item ${activePage === 'Cart' ? 'active' : ''}`}
                            onClick={() => handlePageChange('Cart')}
                        >
                            Cart
                        </div>
                    </div>
                    <div className='horizontal-line'>
                    </div>
                </div>
                <div className='banner'>
                    <img className='image' />
                </div>
            </div>
        </div>
    )
}

export default ContentAreaPage