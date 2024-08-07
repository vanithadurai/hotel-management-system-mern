import React, { useState } from 'react';
import axios from 'axios';
import '../styles/EnterCustomer.css';

const EnterCustomer = () => {
    const [formData, setFormData] = useState({
        room_id: '',
        customer_name: '',
        customer_age: '',
        customer_address: '',
        customer_mobileNo: '',
        customer_aadharno: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/customers/add', formData, {
                headers: { 'x-auth-token': localStorage.getItem('token') }
            });
            alert('Customer added successfully');
        } catch (err) {
            console.error(err);
            alert('Error adding customer');
        }
    };

    return (
        <div>
            <h2>Enter Customer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="room_id" placeholder="Room ID" value={formData.room_id} onChange={handleChange} required />
                <input type="text" name="customer_name" placeholder="Customer Name" value={formData.customer_name} onChange={handleChange} required />
                <input type="number" name="customer_age" placeholder="Customer Age" value={formData.customer_age} onChange={handleChange} required />
                <input type="text" name="customer_address" placeholder="Customer Address" value={formData.customer_address} onChange={handleChange} required />
                <input type="text" name="customer_mobileNo" placeholder="Customer Mobile No" value={formData.customer_mobileNo} onChange={handleChange} required />
                <input type="text" name="customer_aadharno" placeholder="Customer Aadhar No" value={formData.customer_aadharno} onChange={handleChange} required />
                <button type="submit">Add Customer</button>
            </form>
        </div>
    );
};

export default EnterCustomer;