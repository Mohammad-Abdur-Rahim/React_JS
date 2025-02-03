import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header";


const App = () => {
  const [bookMarks, setBookMarks] = useState([]);


  const handleAddToBookMark = (blog) => {
    // console.log(blog);
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const [readTime, setReadTime] = useState(0);
  const handleReadTime = (time,id) => {
    setReadTime(readTime + time);
    // remove 
    const remaingBookMarks = bookMarks.filter(bookmark =>bookmark.id !== id);
    setBookMarks(remaingBookMarks);

  };


  return (
    <div className="max-w-7xl mx-auto">

      <Header></Header>
      <div className="md:flex max">
        <Blogs handleAddToBookMark={handleAddToBookMark} handleReadTime={ handleReadTime }></Blogs>
        <BookMarks bookMarks={bookMarks} readTime={readTime} ></BookMarks>
      </div>


    </div>
  );
};

export default App;