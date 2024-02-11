import { useState , useEffect} from "react";
import BlogList from "./Blog-list";

const Home = () => {
    const [blog, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const[error, setError] = useState(null)


    useEffect(() => {
        setTimeout(() =>{
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch data')
                    }
                    return res.json()
                })
                .then(data =>  {
                    setBlogs(data);
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false)
                })
        }, 500)
    },[]);

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