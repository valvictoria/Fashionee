const Order = ({ subtotal, totalDiscount, total, cart, DELIVERY_COST = 15  }) => {

    return (
        <div className='order'>
            <div className='title'>Your Order</div>
            <div className='order-price-wrapper'>
                <div className='price-row'>
                    <div className='name'>Оrder price</div>
                    <div className='price'>${subtotal.toFixed(2)}</div>
                </div>
                <div className='price-row'>
                    <div className='name'>Discount for promo code</div>
                    <div className='no-price'>${totalDiscount.toFixed(2)}</div>
                </div>
                {cart.length > 0 &&
                    (<div className='price-row delimiter'>
                        <div className='name'>Delivery
                            <span className='additional'> (Aug 02 at 16:00)</span>
                        </div>
                        <div className='price'>${DELIVERY_COST.toFixed(2)}</div>
                    </div>)
                }
                <div className='price-row total'>
                    <div className='name'>Total</div>
                    <div className='price'>${total.toFixed(2)}</div>
                </div>
            </div>
            <div className='button-wrapper'>
                <button className='button'>Checkout</button>
                <div className='vertical-line'></div>
            </div>
        </div>
    )
}

export default Order