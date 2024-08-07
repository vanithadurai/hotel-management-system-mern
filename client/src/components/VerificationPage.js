import React, { useState } from 'react';
import axios from 'axios';

const VerificationPage = ({ setAuth }) => {
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/verify', { token });
            localStorage.setItem('token', response.data.token);
            setAuth(true);
        } catch (err) {
            console.error(err);
            alert('Invalid token');
        }
    };

    return (
        <div>
            <h2>Verify Token</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    required
                />
                <button type="submit">Verify</button>
            </form>
        </div>
    );
};

export default VerificationPage;