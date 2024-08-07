import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ListCustomers.css';
const ListCustomer = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/customers', {
                    headers: { 'x-auth-token': localStorage.getItem('token') }
                });
                setCustomers(response.data);
            } catch (err) {
                console.error(err);
                alert('Error fetching customers');
            }
        };
        fetchCustomers();
    }, []);

    return (
        <div>
            <h2>List of Customers</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.room_id}>
                        {customer.customer_name} (Room: {customer.room_id})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListCustomer;