import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
    
      <Header></Header>
     <div className="md:flex">
     <Blogs></Blogs>
     <BookMarks></BookMarks>
     </div>


    </div>
  );
};

export default App;