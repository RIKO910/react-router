import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    const [posts,setPost]=useState([]);
    useEffect(
        
        ()=>{
           const url='https://jsonplaceholder.typicode.com/posts';
            fetch(url)
            .then(res=>res.json())
            .then(data=>setPost(data))
        }
        ,[])
    return (
        <div>
            <h2>New posts content okkkk</h2>
            <h2>Length:{posts.length}</h2>
            {
                posts.map(post=><Link key={post.id} to={`/posts/${post.id}`}> {post.id} </Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;