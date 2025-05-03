import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartItem = ({ product }) => {
    const { updateQuantity, removeFromCart } = useContext(CartContext)

    return (
        <div key={product.id} className='product'>
            <img src={product.image} alt={product.name} className='photo' />
            <div className='product-info'>
                <div className='title'>{product.name}</div>
                <div className='price-wrapper'>
                    <div className='price-and-quantity'>
                        <div className='price'>
                            <div className='current-price'>${product.price.toFixed(2)}</div>
                            {product.oldPrice && (
                                <div className='old-price'>${product.oldPrice.toFixed(2)}</div>
                            )}
                        </div>
                        <div className='quantity'>
                            <div
                                className='count-button'
                                onClick={() => updateQuantity(product.id, -1)}
                            >
                                -
                            </div>
                            <div className='count'>{product.quantity}</div>
                            <div
                                className='count-button'
                                onClick={() => updateQuantity(product.id, 1)}
                            >
                                +
                            </div>
                        </div>
                    </div>
                    <div className='total-price'>
                        ${(product.price * product.quantity).toFixed(2)}
                    </div>
                </div>
                <div
                    className='close'
                    onClick={() => removeFromCart(product.id)}
                >
                    X
                </div>
            </div>
        </div>
    )
}


export default CartItem