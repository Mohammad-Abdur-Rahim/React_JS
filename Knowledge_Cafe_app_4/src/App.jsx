import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
    
      <Header></Header>
     <div className="md:flex max">
     <Blogs></Blogs>
     <BookMarks></BookMarks>
     </div>


    </div>
  );
};

export default App;