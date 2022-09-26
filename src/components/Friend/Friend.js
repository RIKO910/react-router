import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,username ,id} =props.friend
    const navigate =useNavigate();
    const show =()=>{
        const path =`/friend/${id}`
        navigate(path)

    }
    return (
        <div>
            <h2>Name :{name}</h2>
            <Link to={'/friend/'+id}>Show Detail</Link>
            <button onClick={show}>{username} {id}</button>
        </div>
    );
};

export default Friend;