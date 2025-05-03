import { useCartLogic } from './hooks/useCartLogic';
import CartItem from '../../components/CartItem';
import Order from '../../components/Order';
import PromoCode from '../../components/PromoCode';
import FindUs from '../../components/FindUs'

import './style.css'

const Cart = () => {

    const { 
        cart, 
        subtotal, 
        totalDiscount, 
        total, 
        DELIVERY_COST, 
        applyPromoCode 
    } = useCartLogic()

    return (
        <div className='main-container'>
            <div className='container'>
                <div className='cart'>
                    <div className='order-wrapper'>
                        <div className='product-list'>
                            {cart.length === 0 ? (
                                <span>The cart is empty</span>) : (
                                cart.map((product) => (
                                    <CartItem key={product.id} product={product} />
                                )))
                            }
                        </div>
                        <Order subtotal={subtotal}
                            totalDiscount={totalDiscount}
                            total={total}
                            cart={cart}
                            DELIVERY_COST={DELIVERY_COST} />
                    </div>
                    <div className='promo-code-wrapper'>
                        <PromoCode applyPromoCode={applyPromoCode} />
                        <FindUs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart