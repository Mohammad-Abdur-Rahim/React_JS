import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header";


const App = () => {

const [bookMarks , setBookMarks] =useState([]);


const handleAddToBookMark = (blog) => {
  console.log('Bookmark added:');
};


  return (
    <div className="max-w-7xl mx-auto">
    
     <Header></Header>
     <div className="md:flex max">
     <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
     <BookMarks ></BookMarks>
     </div>


    </div>
  );
};

export default App;