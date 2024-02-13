import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title ,settitle] = useState('');
    const [body ,setbody] = useState('');
    const [author ,setAuthor] = useState('yoshi');
    const [isLoading,setIsLoading] = useState(false);
    const history = useHistory();

    const handelSubit = (e) => {
        e.preventDefault();
        const blog = {title ,body , author}
        console.log(blog)
        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("new blog add")
            setIsLoading(false);
            history.go('http://localhost:8000/blogs');
            // history.push('/');


        })
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handelSubit}>
                <label>Blog title: </label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => settitle(e.target.value)}
                />
                <label>Blog body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setbody(e.target.value)}
                ></textarea>
                <label>Blog author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading&&<button>Add blog</button>}
                {isLoading&&<button disabled>adding blog ...</button>}
                
            </form>
        </div>
    );
}

export default Create;