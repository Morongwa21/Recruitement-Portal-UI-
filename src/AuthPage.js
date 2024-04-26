import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './components/AuthPage.css'; // Import CSS file for AuthPage styles

const AuthPage = () => {
    const [otpCode, setOtpCode] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    const location = useLocation();
    const email = location.state?.email || '';

    useEffect(() => {
        // Automatically hide the popup after 3 seconds (adjust time as needed)
        const timeout = setTimeout(() => {
            setShowPopup(false);
        }, 3000);

        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
    }, []); // Run this effect only once on component mount

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle OTP verification logic here (e.g., send OTP to server for validation)
        console.log('OTP submitted:', otpCode);
        // Optionally, implement OTP verification logic with your backend
    };
    return (
        <div className="auth-container">
            {/* IKUSASATECH text */}
            <div className="brand-text">IKUSASATECH</div>

            {/* Heading */}
            <div className="heading">
                <h2>Account Verification</h2>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Display email and trigger OTP entry */}
                <form onSubmit={handleSubmit} className="otp-form">
                    <div className="otp-input-wrapper">
                        <label htmlFor="otpInput" className="otp-label">OTP Code:</label>
                        <input
                            id="otpInput"
                            type="text"
                            value={otpCode}
                            onChange={(e) => setOtpCode(e.target.value)}
                            placeholder="Enter OTP"
                            required
                        />
                    </div>
                    <button type="submit">Verify</button>
                </form>
            </div>

    {/* Overlay Popup for OTP */}
    {showPopup && (
                <div className="overlay-popup">
                    <div className="popup-content">
                        {/* Popup message and OTP entry */}
                        <p className="popup-email-info">OTP has been sent to *******@gmail.com <strong>{email}</strong></p>
                    </div>
            </div>
    )}
        </div>
    );
};

export default AuthPage;
