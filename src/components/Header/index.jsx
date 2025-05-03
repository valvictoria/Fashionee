import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FavoritesContext } from '../../context/FavoritesContex'
import '../Header/style.css'

const Header = () => {
    const { cart } = useContext(CartContext)
    const { favorites } = useContext(FavoritesContext)

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
    const favoritesCount = favorites.length

    return (
        <header className='header'>
            <div className='left-side'>
                <div className='logo-container'>
                    <div className='burger-menu'>
                        <input type='checkbox' id='burger-checkbox' className='burger-checkbox' />
                        <label className='burger' htmlFor='burger-checkbox'>
                            <span></span>
                        </label>
                        <ul className='menu-burger'>
                            <li className='menu-burger-item'>Home</li>
                            <li className='menu-burger-item'>Pages</li>
                            <li className='menu-burger-item'>Shop</li>
                            <li className='menu-burger-item'>Blog</li>
                            <li className='menu-burger-item'>Contact</li>
                        </ul>
                    </div> 
                    <div className='logo'>
                        <img src='./icons/logo.svg' alt='Logo' />
                    </div>                                                                                                       
                </div>
                <div className='menu'>
                    <div className='menu-item'>
                        <span>Home</span>
                    </div>
                    <div className='menu-item'>
                        <span>Pages</span>
                        <img src='./icons/arrow.svg' alt='' className='arrow-default' />
                        <img src='./icons/arrow-pink.svg' alt='' className='arrow-hover' />
                    </div>
                    <div className='menu-item active'>
                        <span>Shop</span>
                        <img src='./icons/arrow.svg' alt='' className='arrow-default' />
                        <img src='./icons/arrow-pink.svg' alt='' className='arrow-hover' />
                    </div>
                    <div className='menu-item'>
                        <span>Blog</span>
                    </div>
                    <div className='menu-item'>
                        <span>Contact</span>
                    </div> 
                </div>           
            </div>       
            <div className='right-side'>
                <div className='header-icon'>
                    <img src='./icons/search.svg' alt='' />
                </div>
                <div className='header-icon'>
                    <img src='./icons/user.svg' alt='' />
                </div>
                <div className='header-icon'>
                    <img src='./icons/heart.svg' alt='' />
                    <div className='counter'>{favoritesCount}</div>
                </div>
                <div className='header-icon'>
                    <img src='./icons/shopping-bag.svg' alt='' />
                    <div className='counter'>{cartCount}</div>
                </div>
            </div>
        </header>
    )
}

export default Header