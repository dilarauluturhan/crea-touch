import { BsArrowLeftSquare } from 'react-icons/bs';
import { BsArrowRightSquare } from 'react-icons/bs';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <section>
            <ul className='flex items-center justify-center gap-x-7 font-nunito'>
                {currentPage > 1 && (
                    <li>
                        <button onClick={() => onPageChange(currentPage - 1)}>
                            <BsArrowLeftSquare size={32}/>
                        </button>
                    </li>
                )}
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            className={`px-3 py-1 text-lg ${currentPage === number
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
                        <button onClick={() => onPageChange(currentPage + 1)}>
                            <BsArrowRightSquare size={32}/>
                        </button>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default Pagination;