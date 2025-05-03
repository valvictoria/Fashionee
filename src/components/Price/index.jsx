import { useFilters } from "../../context/FiltersContext"

const Price = () => {
    const { dispatch } = useFilters()

    const handlePriceChange = (type, value) => {
        const numericValue = value === '' ? (type === 'min' ? 0 : 9999999) : Number(value)
        //сброс на значение по умолчанию 
        dispatch({
            type: 'SET_PRICE',
            payload: { min: type === 'min' ? numericValue : 0,
                max: type === 'max' ? numericValue : 9999999            
            },
        });
    };

    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Price</div>
            <div className='sidebar-content'>
                <div className='price-bar'>
                    <input type='number' 
                        placeholder='$21.00' 
                        className='input input-1'
                        onChange={(e) => handlePriceChange('min', e.target.value)} />
                    <input type='number' 
                        placeholder='$187.99' 
                        className='input input-1' 
                        onChange={(e) => handlePriceChange('max', e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Price