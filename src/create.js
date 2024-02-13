import { useState } from "react";

const Create = () => {
    const [title ,settitle] = useState('');
    const [body ,setbody] = useState('');
    const [author ,setAuthor] = useState('yoshi');
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
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
                <button>Add blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;