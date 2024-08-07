import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import EnterCustomer from './components/EnterCustomer';
import ListCustomers from './components/ListCustomers';
import UpdateCustomer from './components/UpdateCustomer';
import RemoveCustomer from './components/RemoveCustomer';
import VerificationPage from './components/VerificationPage';
import './App.css';

const App = () => {
    const [auth, setAuth] = useState(!!localStorage.getItem('token'));

    return (
        <Router>
            <Navbar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/verify" element={<VerificationPage setAuth={setAuth} />} />
                    <Route path="/enter-customer" element={auth ? <EnterCustomer /> : <LoginPage setAuth={setAuth} />} />
                    <Route path="/list-customers" element={auth ? <ListCustomers /> : <LoginPage setAuth={setAuth} />} />
                    <Route path="/update-customer" element={auth ? <UpdateCustomer /> : <LoginPage setAuth={setAuth} />} />
                    <Route path="/remove-customer" element={auth ? <RemoveCustomer /> : <LoginPage setAuth={setAuth} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;