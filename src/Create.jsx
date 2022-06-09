import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('null')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title,body,author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('新規ブログ追加');
            setIsPending(false)
            // history.go(-1)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h2>新しいブログを書く</h2>
            <form onSubmit={handleSubmit}>
                <label>ブログタイトル</label>
                <input type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required />
                <br />
                <label>ブログ本文</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}></textarea><br />
                <label>著者：</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="null">選択してください</option>
                    <option value="田中">田中</option>
                    <option value="吉次郎">吉次郎</option>
                    <option value="光一">光一</option>
                </select><br />
                {!isPending && <input type="submit" value="ブログを追加" />}
                {isPending && <input type="submit" value="ブログを追加しています" disabled/>}
            </form>
        </div>
    );
}

export default Create;