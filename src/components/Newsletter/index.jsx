import './style.css'

const Newsletter = () => {
    return (
        <div className='newsletter-container'>
            <div className='container'>           
                <div className='newsletter-block'>
                    <div className='points-newsletter'>
                        <img src='./image/points-newsletter-footer-left.svg' alt='' />
                    </div>
                    <div className='info'>
                        <div className='title'>Newsletter</div>
                        <div className='description'>Be the first to hear about deals,  offers and upcoming collections.</div>
                    </div>
                    <div className='subscribe'>
                        <input type='email' name='newsletter' className='input' placeholder='Enter your email' />
                        <div className='button-wrapper'>
                            <button className='button'>Subscribe</button>
                            <div className='vertical-line'></div>
                        </div>
                    </div>  
                </div>                    
            </div>
        </div>
    )
}

export default Newsletter