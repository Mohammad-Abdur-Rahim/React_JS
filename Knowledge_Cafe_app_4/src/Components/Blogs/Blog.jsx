import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { title, cover, reading_time, author, author_img,posted_date,hashtag } = blog;
    return (
        <div>
            <img className='w-4xl ml-8' src={cover} alt="nothing img" />
            <div className='flex justify-between items-center ml-8 '>
                <div className='flex pt-5'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                <div className='ml-8'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
                </div>
                <div>
        <p>{reading_time} min read</p>
                </div>
            </div>
            <h2 className='text-4xl ml-8 p-5'>{title}</h2>
            <p>
                {
                    hashtag.map((hash,idx) => <span key={idx}><a  href="">{hash}</a></span> )
                }
            </p>

        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;