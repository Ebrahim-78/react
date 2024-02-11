import { useState , useEffect} from "react";
import BlogList from "./Blog-list";

const Home = () => {
    const [blog, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setTimeout(() =>{
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data =>  {
                setBlogs(data);
                setIsLoading(false)
            });
        }, 500)
    },[]);

    return (
        <div className="home">
            {isLoading && <div>Lading....</div>}
            {blog && <BlogList blog={blog} title = "All Blogs !!" /> }
            {/* {blog &&<BlogList blog={blog.filter((blog => blog.auther === 'Ebrahim'))} title = "Ebrahim's Blogs !!" handelDelete={handelDelete} />} */}
            {/* {<BlogList blog={blog.filter((blog => blog.auther === 'mohammed'))} title = "mohammed's Blogs !!" handelDelete={handelDelete} />} */}
        </div>
    );
}

export default Home