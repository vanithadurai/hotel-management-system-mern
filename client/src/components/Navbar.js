import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/enter-customer">Enter Customer</Link></li>
                <li><Link to="/list-customers">List Customers</Link></li>
                <li><Link to="/update-customer">Update Customer</Link></li>
                <li><Link to="/remove-customer">Remove Customer</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;