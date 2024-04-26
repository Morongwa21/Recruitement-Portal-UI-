import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './components/PersonalInfoPage.css'; 

const PersonalInfoPage = () => {
    const navigate = useNavigate(); // Initialize navigate function using useNavigate hook

    const handleEducationClick = () => {
        // Navigate to the '/education' route when Education button is clicked
        navigate('/EducationPage');
    };

    const handleNextClick = () => {
        // Navigate to the '/personalsec' route when Next button is clicked
        navigate('/personalsec'); // Use navigate function to redirect to '/personalsec'
    };
    const handleWorkExperienceClick = () => {
        // Navigate to the '/personalsec' route when Next button is clicked
        navigate('/WorkExperience'); // Use navigate function to redirect to '/personalsec'
    };

    return (
        <div className="cv-container">
            {/* IKUSASATECH text */}
            <div className="brand-text">IKUSASATECH</div>

            {/* Title */}
            <div className="title-container">
                <div className="title-text">CURRICULUM VITAE</div>
            </div>

            {/* Gray Container covering buttons and content */}
            <div className="gray-container">
                {/* Buttons Container */}
                <div className="buttons-container">
                    <div className="button-column">
                        <button className="yellow-button">Personal Info</button>
                    </div>
                    <div className="button-column">
                        {/* Add onClick event to navigate to EducationPage */}
                        <button className="yellow-button" onClick={handleEducationClick}>
                            Education
                        </button>
                    </div>
                    <div className="button-column">
                        {/* Add onClick event to navigate to EducationPage */}
                        <button className="yellow-button" onClick={handleWorkExperienceClick}>
                            Work Experience
                        </button>
                    </div>
                </div>

                {/* Text: Fields with indicates required */}
                <div className="field-text">Fields with * indicate required</div>

                <div className="question-text">
                    Full Names:
                </div>
                <input type="text" className="edit-box" />

                <div className="question-text">Cell Number</div>
                <input type="text" className="edit-box" />

                <div className="question-text">Gender</div>
                <input type="text" className="edit-box" />

                <div className="question-text">Alternative Number</div>
                <input type="text" className="edit-box" />

                <div className="question-text">CitizenShip</div>
                <input type="text" className="edit-box" />

                <div className="question-text">Email</div>
                <input type="text" className="edit-box" />

                <div className="question-text">Date of Birth</div>
                <input type="text" className="edit-box" />

                <div className="question-text">Disability</div>
                <input type="text" className="edit-box" />

                {/* Handle navigation on button click */}
                <button className="blue-button" onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
};

export default PersonalInfoPage;
