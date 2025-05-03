import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { 
    DELIVERY_COST,
    calculateCartTotals,
    applyPromoCodeLogic
} from '../../../utils/CartUtils'

export const useCartLogic = () => {
    const { cart } = useContext(CartContext)
    const [discount, setDiscount] = useState(0)

    const { subtotal, totalDiscount, total } = calculateCartTotals(cart, discount)

    const applyPromoCode = (promoCode) => {
        const isValid = applyPromoCodeLogic(promoCode, setDiscount)
        if (!isValid) {
            alert('Invalid promo code, try again')
        }
    }

    return {
        cart,
        subtotal,
        totalDiscount,
        total,
        DELIVERY_COST,
        applyPromoCode
    }
}