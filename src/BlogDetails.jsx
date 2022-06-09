import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog,error,isPending} = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory()
    const handleClick = () =>{
        const confirmDelete = window.confirm("削除しますか？")
        console.log(confirmDelete);
        if(confirmDelete){
            fetch('http://localhost:8000/blogs/'+blog.id,{
                method:"DELETE"
            }).then(()=>{
                history.push("/")
            })
        }
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                     <h2>{blog.title}</h2>
                     <p>著者 {blog.author}</p>
                     <div>{blog.body}</div>
                     <button onClick={handleClick}>記事を削除する</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;