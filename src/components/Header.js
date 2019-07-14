import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/author">Author</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
);


export default Header;