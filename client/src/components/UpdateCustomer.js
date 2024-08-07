import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UpdateCustomer.css';

const UpdateCustomer = () => {
    const [room_id, setRoomId] = useState('');
    const [formData, setFormData] = useState({
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
            await axios.put(`http://localhost:5000/api/customers/${room_id}`, formData, {
                headers: { 'x-auth-token': localStorage.getItem('token') }
            });
            alert('Customer updated successfully');
        } catch (err) {
            console.error(err);
            alert('Error updating customer');
        }
    };

    return (
        <div>
            <h2>Update Customer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Room ID" value={room_id} onChange={(e) => setRoomId(e.target.value)} required />
                <input type="text" name="customer_name" placeholder="Customer Name" value={formData.customer_name} onChange={handleChange} />
                <input type="number" name="customer_age" placeholder="Customer Age" value={formData.customer_age} onChange={handleChange} />
                <input type="text" name="customer_address" placeholder="Customer Address" value={formData.customer_address} onChange={handleChange} />
                <input type="text" name="customer_mobileNo" placeholder="Customer Mobile No" value={formData.customer_mobileNo} onChange={handleChange} />
                <input type="text" name="customer_aadharno" placeholder="Customer Aadhar No" value={formData.customer_aadharno} onChange={handleChange} />
                <button type="submit">Update Customer</button>
            </form>
        </div>
    );
};

export default UpdateCustomer;