import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate();
    
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/order`;
        const getOrders = async () => {
            const request = await fetch(url, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            const response = await request.json();
            // console.log(request);
            if (request.status === 401 || request.status === 403) {
                console.log(request.statusText);
                navigate('/login');
            } else {
                setOrders(response);
                console.log(response);
            }
        };
        getOrders();
    }, []);
    return (
        <div>
            <h2>This is Order route: {orders.length}</h2>
        </div>
    );
};

export default Order;