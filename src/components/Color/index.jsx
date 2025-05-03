const Color = ({ tempFilters, setTempFilters }) => {
    const colors = ['Black', 'Blue', 'Red', 'Brown', 'White']

    const handleColorChange = (event) => {
        const { value, checked } = event.target
        const updatedColors = checked
            ? [...tempFilters.color, value]
            : tempFilters.color.filter((c) => c !== value)

        setTempFilters((prev) => ({ ...prev, color: updatedColors }))
    }

    return (
        <div className='sidebar-item'>
            <div className='sidebar-title'>Colors</div>
            <div className='sidebar-content'>
                <div className='colors'>
                    {colors.map((color) => (
                        <div className='color' key={color}>
                            <input
                                type='checkbox'
                                id={color}
                                className='color-checkbox'
                                value={color}
                                checked={tempFilters.color.includes(color)}
                                onChange={handleColorChange}
                            />
                            <label htmlFor={color} className='color-name'>
                                {color}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Color