import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const{postID}=useParams();
    const [post,setPost]= useState({});
    useEffect(
        
        ()=>{
           const url=`https://jsonplaceholder.typicode.com/posts/${postID}`;
            fetch(url)
            .then(res=>res.json())
            .then(data=>setPost(data))
        }
        ,[postID])

    return (
        <div>
            <h2>This is post detail:{postID}</h2>
            <h3>Title:{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;