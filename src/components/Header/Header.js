import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomeLink/CustomeLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to React Router!</h1>
            <nav>
                <CustomLink to ="/">Home</CustomLink>
                
                <Link to="friends">Friends</Link>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;