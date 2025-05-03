const ApplyFilter = ({ isFilterActive, applyFilters }) => {
    return (
        <div className='sidebar-item'>
            <div className='button-wrapper'>
                <button className='button' 
                    disabled={!isFilterActive}
                    onClick={applyFilters}
                    >
                    Apply Filter
                    </button>
                <div className='vertical-line'></div>
            </div>
        </div>
    )
}

export default ApplyFilter