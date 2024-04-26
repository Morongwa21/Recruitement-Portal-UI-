import React, { useState } from 'react';
import './components/SignUp.css';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [subscribeUpdates, setSubscribeUpdates] = useState(false);
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');

    const handleTermsChange = () => {
        setAcceptedTerms(!acceptedTerms);
    };

    const handleSubscribeChange = () => {
        setSubscribeUpdates(!subscribeUpdates);
    };

    const validatePassword = (password) => {
        // Password must be at least 8 characters and contain both letters and numbers
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!acceptedTerms) {
            alert('Please accept the terms and conditions.');
            return;
        }

        // Validate password
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters and include both letters and numbers.');
            return;
        }

        // Handle form submission logic here
        console.log('Form submitted successfully!');
        navigate('/AuthPage');
    };

    return (
        <div className="container">
            {/* IKUSASATECH text */}
            <div className="brand-text">IKUSASATECH</div>

            {/* Heading */}
            <div className="heading">
                <h2>Create Account</h2>
            </div>

            {/* Registration Form */}
            <div className="registration-form">
                <form onSubmit={handleSubmit}>
                    {/* Name and Surname Fields */}
                    <div className="name-surname-group">
                        <div className="name-field">
                            <label htmlFor="firstName">Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="surname-field">
                            <label htmlFor="surname">Surname:</label>
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                placeholder="Enter Surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Email and Date of Birth Fields */}
                    <div className="email-dob-group">
                        <div className="email-field">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="dob-field">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Accept Terms and Conditions */}
                    <div className="form-group terms-conditions">
                        <label htmlFor="terms">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={acceptedTerms}
                                onChange={handleTermsChange}
                                required
                            />
                            &nbsp;I accept the <span className="terms-link">Terms and Conditions</span>
                        </label>
                    </div>

                    {/* Subscribe for Updates */}
                    <div className="form-group subscribe-updates">
                        <label htmlFor="subscribeUpdates">
                            <input
                                type="checkbox"
                                id="subscribeUpdates"
                                name="subscribeUpdates"
                                checked={subscribeUpdates}
                                onChange={handleSubscribeChange}
                            />
                            &nbsp;Subscribe for Updates
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
