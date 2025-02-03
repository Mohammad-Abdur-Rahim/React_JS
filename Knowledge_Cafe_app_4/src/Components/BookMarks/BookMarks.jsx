import PropTypes from 'prop-types';
import BookDisplay from './BookDisplay';
const BookMarks = ({bookMarks,readTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-8 rounded-xl">
            <h2 className='text-2xl text-center pt-5 text-sky-900 font-bold'>Reading Time : {readTime}</h2>
            <h2 className='text-2xl text-center pt-5 text-sky-900 font-bold'>BookMarks Blog : {bookMarks.length}</h2>
            {
                bookMarks.map(bookM =><BookDisplay key={bookM.id} bookMarks={bookM}></BookDisplay>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readTime: PropTypes.number
    
}
export default BookMarks;