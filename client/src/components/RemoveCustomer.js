import React, { useState } from 'react';
import axios from 'axios';
import '../styles/RemoveCustomer.css';


const RemoveCustomer = () => {
    const [room_id, setRoomId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:5000/api/customers/${room_id}`, {
                headers: { 'x-auth-token': localStorage.getItem('token') }
            });
            alert('Customer removed successfully');
        } catch (err) {
            console.error(err);
            alert('Error removing customer');
        }
    };

    return (
        <div>
            <h2>Remove Customer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Room ID" value={room_id} onChange={(e) => setRoomId(e.target.value)} required />
                <button type="submit">Remove Customer</button>
            </form>
        </div>
    );
};

export default RemoveCustomer;