import { useState, useEffect } from 'react';

const ReviewedByYou = ({ data }) => {
    const [reviewedProducts, setReviewedProducts] = useState([])

    useEffect(() => {
        const getRandomPThreeroducts = () => {
            return [...data.products]
                .sort(() => Math.random() - 0.5) // Перемешиваем массив
                .slice(0, 3); // Берём 3 случайных товара
        }
        setReviewedProducts(getRandomPThreeroducts()) //вызываем функцию
    }, [data])

    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Reviewed By You</div>
            <div className='sidebar-content'>
                <div className='reviewed-products'>
                    {
                        reviewedProducts.map((product) => (
                            <div className='product' key={product.id}>
                                <div className='image'>
                                    <img src={product.image} 
                                        alt={product.name} 
                                        className='product-image'/>
                                </div>
                                <div className='info'>
                                    <div className='name'>{product.name}</div>
                                    <div className='price'>
                                        <div className='current-price'>${product.price}</div>
                                        {product.oldPrice && (<div className='old-price'>
                                            ${product.oldPrice}
                                        </div>)}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ReviewedByYou