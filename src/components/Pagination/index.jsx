const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={`pagination ${totalPages <= 1 ? 'hide' : ''}`}>
            {currentPage > 0 && (<div
                className='button left'
                onClick={() => onPageChange(currentPage - 1)}
            >
                <img src='./icons/left-pagin-arrow.svg' alt='Previous' />
            </div>)}
            <div className='pages'>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                        key={index}
                        className={`page ${index === currentPage ? 'active' : ''}`}
                        onClick={() => onPageChange(index)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
            {currentPage < totalPages - 1 && (<div
                className='button right'
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
            >
                <img src='./icons/right-pagin-arrow.svg' alt='Next' />
            </div>)}
        </div>
    )
}

export default Pagination