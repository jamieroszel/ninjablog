import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'Jamie', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'John', id: 1},
        {title: 'My new website', body: 'lorem ipsum...', author: 'Jane', id: 1}
    ]);
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home
