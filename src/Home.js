import { useState , useEffect} from "react";
import BlogList from "./Blog-list";
import useFetch from "./useFectch";
const Home = () => {
    const {data:blog ,isLoading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <diiv>{error}</diiv>}
            {isLoading && <div>Lading....</div>}
            {blog && <BlogList blog={blog}  title = "All Blogs !!" /> }
            {/* {blog &&<BlogList blog={blog.filter((blog => blog.auther === 'Ebrahim'))} title = "Ebrahim's Blogs !!" handelDelete={handelDelete} />} */}
            {/* {<BlogList blog={blog.filter((blog => blog.auther === 'mohammed'))} title = "mohammed's Blogs !!" handelDelete={handelDelete} />} */}
        </div>
    );
}

export default Home