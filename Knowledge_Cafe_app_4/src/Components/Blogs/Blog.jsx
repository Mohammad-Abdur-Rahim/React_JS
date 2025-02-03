import { IoBookmarksOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Blog = ({ blog, handleAddToBookMark }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtag } = blog;
    return (
        <div>
            <img className='w-5xl rounded-xl ' src={cover} alt="nothing img" />
            <div className='flex justify-between items-center  '>
                <div className='flex pt-5 '>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="space-x-2">
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookMark(blog)} className="text-2xl text-yellow-200 btn">
                        <IoBookmarksOutline />
                    </button>
                </div>
            </div>
            <h2 className='text-4xl  p-5'>{title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button className="btn btn-warning mb-4">Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired,
}
export default Blog;