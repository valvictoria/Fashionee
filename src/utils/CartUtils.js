export const DELIVERY_COST = 15

export const validPromoCodes = {
    'SUMMER20': 0.2,
    'AUTUMN35': 0.35,
    'WINTER15': 0.15,
    'ILOVEREACT': 0.10
}

export const calculateCartTotals = (cart, discount = 0) => {
    const subtotal = cart.reduce((total, product) => 
        total + product.price * product.quantity, 0)
    const totalDiscount = subtotal * discount
    const total = cart.length > 0 ? 
        subtotal - totalDiscount + DELIVERY_COST : 0
    return { subtotal, totalDiscount, total }
}

export const applyPromoCodeLogic = (promoCode, setDiscount) => {
    if (validPromoCodes[promoCode]) {
        setDiscount(validPromoCodes[promoCode])
        return true
    }
    return false
}