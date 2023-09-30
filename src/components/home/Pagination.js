import {GoArrowLeft} from 'react-icons/go';
import {GoArrowRight} from 'react-icons/go';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <section>
            <ul className='flex items-center justify-center md:justify-end -space-x-px text-md md:text-xl bg-transparent'>
                {currentPage > 1 && (
                    <li>
                        <button
                            className='px-3 h-8 ml-0 leading-tight border border-secondColor rounded-l-lg hover:bg-gray-50 hover:text-secondColor 
                        '
                            onClick={() => onPageChange(currentPage - 1)}>
                            <GoArrowLeft/>
                        </button>
                    </li>
                )}
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            className={`px-3 h-8 leading-tight border border-secondColor hover:bg-gray-100 hover:text-gray-700 
                                    ${currentPage === number
                                    ? "bg-secondColor text-firstColor rounded"
                                    : "bg-firstColor text-secondColor"
                                }`}
                            onClick={() => onPageChange(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li>
                        <button
                            className='px-3 h-8 leading-tight border border-secondColor rounded-r-lg hover:bg-gray-50 hover:text-secondColor'
                            onClick={() => onPageChange(currentPage + 1)}>
                           <GoArrowRight/>
                        </button>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Pagination;