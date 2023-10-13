import { GoArrowLeft } from 'react-icons/go';
import { GoArrowRight } from 'react-icons/go';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    };

    return (
        <section className="mb-12 mt-6">
            <ul className="flex items-center justify-center -space-x-px text-md md:text-xl bg-transparent">
                {currentPage > 1 && (
                    <li>
                        <button
                            className="px-5 h-10 ml-0 leading-tight border border-gray-400 rounded-l-lg text-gray-700"
                            onClick={() => onPageChange(currentPage - 1)}>
                            <GoArrowLeft />
                        </button>
                    </li>
                )}
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            className={`px-5 h-10 leading-tight border border-gray-400 
                                    ${currentPage === number
                                    ? "bg-thirdColor text-firstColor rounded"
                                    : "bg-firstColor text-gray-700"
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
                            className="px-5 h-10 leading-tight border border-gray-400 rounded-r-lg text-gray-700"
                            onClick={() => onPageChange(currentPage + 1)}>
                            <GoArrowRight />
                        </button>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Pagination;