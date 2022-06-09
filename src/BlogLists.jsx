import { Link } from "react-router-dom";

const BlogLists = ({blogs,title}) => {
    // const blogs = props.blogs,
    // title = props.title
    return (
        <div className="blog-list">
            <h3>{title}</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h4>「{blog.title}」</h4>
                    <p>著者：{blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogLists;