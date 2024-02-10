import { useState } from "react";
import BlogList from "./Blog-list";

const Home = () => {
    // let name = 'mario'
    const [blog, setBlogs] = useState([
        {title: 'My new website', body:' lorem ispum',auther:'mario', id: 1},
        {title: 'Welcom party', body:' lorem ispum',auther:'yoshi', id: 2},
        {title: 'web dev top tips', body:' lorem ispum',auther:'Ebrahim', id:3},
    ])

    return (
        <div className="home">
        <BlogList blog={blog} title = "All Blogs" />
        </div>
    );
}

export default Home