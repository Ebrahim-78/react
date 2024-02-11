import { useState , useEffect} from "react";
import BlogList from "./Blog-list";

const Home = () => {
    const [blog, setBlogs] = useState([
        {title: 'My new website', body:' lorem ispum',auther:'mohammed', id: 1},
        {title: 'Welcom party', body:' lorem ispum',auther:'Ebrahim', id: 2},
        {title: 'web dev top tips', body:' lorem ispum',auther:'Ebrahim', id:3},
        {title: 'web dev top tips', body:' lorem ispum',auther:'Ebrahim', id:4},
        {title: 'web dev top tips', body:' lorem ispum',auther:'mohammed', id:5},
    ])
    const handelDelete =(id) => {
        const newBlogs = blog.filter(blog => blog.id !== id )
        setBlogs(newBlogs);

    }
    useEffect(() => {
        console.log('use effect ran ')
        console.log(blog)
    });
    return (
        <div className="home">
        <BlogList blog={blog} title = "All Blogs !!" handelDelete={handelDelete}/>
        <BlogList blog={blog.filter((blog => blog.auther === 'Ebrahim'))} title = "Ebrahim's Blogs !!" handelDelete={handelDelete} />
        <BlogList blog={blog.filter((blog => blog.auther === 'mohammed'))} title = "mohammed's Blogs !!" handelDelete={handelDelete} /> 
        </div>
    );
}

export default Home