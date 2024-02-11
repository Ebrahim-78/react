const BlogList = ({blog, title, handelDelete}) => { 

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blog.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.auther} </p>
                    <button onClick={() => handelDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;