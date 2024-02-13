import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFectch";
const BlogDetails = () => {
    const { id  } = useParams()
    const {data: blog , isLoading , error} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory();
    const handeClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE",
        })
        .then(() => {
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2> {BlogDetails.title} </h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handeClick}>Delet Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;