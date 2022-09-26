import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params =useParams();
    const [info,setInfo] =useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${params.FriendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInfo(data));
    },[])
    return (
        <div>
            <h1>Bondhu tumi valo acho naki bolo to amake :{params.FriendId}</h1>

            <p>
                Name:{info.name}
                <br />
                Email={info.email}
                <br />
                Websit:{info.website}
                <br />
            </p>
        </div>
    );
};

export default FriendDetail;