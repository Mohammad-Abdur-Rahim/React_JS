import PropTypes from 'prop-types';
const BookDisplay = ({bookMarks}) => {
    const {title} = bookMarks;
    return (
        <div className='bg-slate-100 p-4 m-4 rounded-xl'>
            <h2 className='text-2xl text-black'>{title}</h2>
        </div>
    );
};
BookDisplay.propTypes = {
    bookMarks: PropTypes.object

}
export default BookDisplay;