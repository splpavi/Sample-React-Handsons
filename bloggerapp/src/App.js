
import './App.css';
import { blogs, books, courses } from './components/constants';

function App() {
  const bookdet=(
    <ul>
      {books.map((book)=>{
        return(
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>)

})}
</ul>
  )
 const coursedet=(
    <ul>
      {courses.map((course)=>{
        return(
        <div key={course.name}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>)

})}
    </ul>
  )
  const blogdet=(
    <ul>
      {blogs.map((blog)=>{
        return(
        <div key={blog.type}>
          <h3>{blog.type}</h3>
          <h4>{blog.Author}</h4>
          <h5>{blog.invitation}</h5>
        </div>)

})}
    </ul>
  )
  return (
    <div className="App">
      <h1 style={{backgroundColor:'black',color:'red',textAlign:'center',marginTop:0}}>Blogger App!!</h1>
   <div>
     <div className="grp">
       <div className="cd">
         <h1>Course Details</h1>
         {coursedet}
       </div>
       <div className="bd">
         <h1>Book Details</h1>
         {bookdet}
       </div>
       <div className="bld">
         <h1>blog Details</h1>
         {blogdet}
       </div>
     </div>
   </div>
    </div>
  );
}

export default App;
