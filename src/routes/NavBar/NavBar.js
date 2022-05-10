import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-dark'>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-white' as={Link} to="/order">Order</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-white' as={Link} to="/inventory">Inventory</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavBar;