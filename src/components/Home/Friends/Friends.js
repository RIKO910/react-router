import React, { useEffect, useState } from 'react';
import Friend from '../../Friend/Friend';

const Friends = () => {
    const [friends , setFriends  ] =useState([ ]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data));
    },
       
        [])
        
   
    return (
        <div>
            <h2>Hello friends how ARE YOU</h2>
            <p>parle kisu tk dhar dis {friends.length}</p>
            {
                friends.map(friend=><Friend key={friend.id} friend={friend} name={friend.name} username={friend.username}></Friend>)
            }
        </div>
    );
};

export default Friends;