import BlogLists from "./BlogLists";
import useFetch from "./useFetch";
const Home = () => {
    // const [name,setName] = useState('mario')
    // const [age,setAge] = useState(25)
    // const handleClick = (e) =>{
    //     setName(name=>name='luigi')
    //     setAge(age=>age=38)
    // }
    // const handleClickAgain = (name,e) =>{
    //     console.log("hello " + name,e.target);
    // }
    // const [name,setName] = useState('芳雄')
    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    const {data:blogs,isPending,error} = useFetch("http://localhost:8000/blogs")
    return (
        <div className="home">
            {/* <h2>Home Page だよ！</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickAgain('芳雄',e)}>Click me again</button> */
            }
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogLists blogs={blogs} title={"All Blogs"} />}
            {/* <button onClick={()=>setName("田中")}>名前を変更</button>
            <p>{name}</p> */}
        </div>
    );
}

export default Home;