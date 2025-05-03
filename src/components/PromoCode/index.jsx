import { useState } from "react";

const PromoCode = ({ applyPromoCode }) => {
    const [promoCode, setPromoCode] = useState('')

    return (
        <>
            <div className='info'>
                <div className='title'>You Have A Promo Code?</div>
                <div className='description'>To receive up-to-date promotional codes, subscribe to us on social networks.</div>
            </div>
            <div className='promo-code'>
                <input type='text'
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    name='promo-code'
                    className='input'
                    placeholder='Enter promo code' />
                <div className='button-wrapper'>
                    <button className='button' onClick={() => applyPromoCode(promoCode)}>
                        <img src='./icons/button-arrow.svg' alt='Arrow icon' />
                    </button>
                    <div className='vertical-line'></div>
                </div>
            </div>
        </>
    )
}

export default PromoCode