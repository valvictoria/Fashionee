import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FavoritesContext } from '../../context/FavoritesContex';

const ProductInfo = ({ product }) => {
    const { cart, addToCart, updateQuantity, removeFromCart } = useContext(CartContext)
    const { favorites, toggleFavorite } = useContext(FavoritesContext)

    const isFavorite = favorites.some((item) => item.id === product.id)
    const cartItem = cart.find((item) => item.id === product.id)

    return (
        <div className='product' key={product.id}>
            <div className='photo'>
                <div className='top-bar'>
                    <div className='labels'>
                        {product.isSale && <div className='label sale'>Sale</div>}
                        {product.isNew && <div className='label new'>New</div>}
                    </div>
                    <div className='favorites' onClick={() => toggleFavorite(product)}>
                        <img src={isFavorite ? './icons/heart-red.svg' : './icons/heart.svg'} alt='' />
                    </div>
                </div>
                <img className='product-image' src={product.image} alt={product.name} />
            </div>
            <div className='info'>
                <div className='name'>{product.name}</div>
                <div className='price'>
                    <div className='current-price'>${product.price}</div>
                    {product.oldPrice && <div className='old-price'>${product.oldPrice}</div>}
                </div>
            </div>
            <div className='cart-controls'>
                {cartItem ? (
                    <div className='cart-buttons'>
                        <button className='cart-btn minus'
                            onClick={() => {
                                if (cartItem.quantity > 1) {
                                    updateQuantity(product.id, -1)
                                } else {
                                    removeFromCart(product.id)
                                }
                            }}>
                            -
                        </button>
                        <span className='cart-quantity'>
                            {cartItem.quantity}
                        </span>
                        <button className='cart-btn plus'
                            onClick={() => updateQuantity(product.id, 1)}>
                            +
                        </button>
                    </div>
                ) : (
                    <button className='buy-btn' onClick={() => addToCart(product)}>
                        Add to cart
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProductInfo