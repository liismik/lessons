import MainLayout from "../components/layouts/MainLayout";
import { useContext, useState, useRef, useEffect } from "react"
import { Context } from "../store"
import { addPost, removePost, updatePosts } from "../store/actions"

function Posts() {
    const [title, setTitle] = useState("")
    const [state, dispatch] = useContext(Context)
    const inputRef = useRef(null);


    useEffect(() => {
        fetch('http://localhost:8081/api/post').then(res => {
          return res.json();
        }).then(async (data) => {
          await dispatch(updatePosts(data))
        })
      }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
      const handleSubmit = (e) => {
        e.preventDefault()
    
        const newPost = {
          title,
          authorId: state.auth.user.id,
        }
    
        setTitle("")
    
        addNewPost(newPost)
    
        if (inputRef.current) inputRef.current.focus()
      }
    
      const addNewPost = async (post) => {
        const res = await fetch('http://localhost:8081/api/post/create', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify(post),
        })
    
        const returnData = await res.json()
    
        dispatch(addPost(returnData))
      }

    console.log({ inputRef })
    return (
        <MainLayout>
            <div id="posts" style={{ textAlign: "center" }}>
                <h1>Lisa post</h1>
                <form onSubmit={handleSubmit}>
                    <input ref={inputRef} type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                    <button type="submit">Submit</button>
                </form>

                {state.posts.data.map(e => 
                <li key={e.id}>{e.id} {e.title}
                    <span style={{ cursor: "pointer" }}
                    onClick={() => dispatch(removePost(e.id))}
                    >
                        &#128540;
                    </span>
                </li>)}
            </div>
        </MainLayout>
    )
}

export default Posts;