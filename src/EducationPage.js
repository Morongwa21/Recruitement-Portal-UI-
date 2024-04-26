import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './components/PersonalInfoPage.css'; 

const EducationPage = () => {
    const navigate = useNavigate(); // Initialize navigate function using useNavigate hook

    const handleNextClick = () => {
        // Navigate to the '/personalsec' route when Save button is clicked
        navigate('/personalsec'); // Use navigate function to redirect to '/personalsec'
    };




    const handleWorkExperienceClick = () => {
        navigate('/WorkExperience'); // Use navigate function to redirect to '/personalsec'
    };
    const handleEducationClick = () => {
        // Navigate to the '/education' route when Education button is clicked
        navigate('/EducationPage');
    };
    const handlePersonalInfoClick = () => {
        // Navigate to the '/education' route when Education button is clicked
        navigate('/personalinfo');
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
                    <button className="yellow-button" onClick={handlePersonalInfoClick}>
                        Personal Info
                        </button>
                    </div>
                    <div className="button-column">
                    <button className="yellow-button" onClick={handleEducationClick}>
  Education
</button>
                    </div>
                    <div className="button-column">
                    <button className="yellow-button" onClick={handleWorkExperienceClick}>
                            Work Experience
                        </button>
                    </div>
                </div>

                {/* Text: Fields with indicates required */}
                <div className="field-text">Fields with * indicate required</div>

                {/* Select for Highest Qualification */}
                <div className="question-text">
                    Highest Qualification
                </div>
                <select className="edit-box">
                    <option value="">Select Highest Qualification</option>
                    <option value="PhD">PhD</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Certificate">Certificate</option>
                    <option value="Other">Other</option>
                </select>

                {/* Qualification Documents File Upload */}
                <div className="question-text">Qualification Documents</div>
                <input type="file" className="edit-box" />

                {/* Specify Field of Qualification */}
                <div className="question-text">Specify Field of Qualification</div>
                <input type="text" className="edit-box" />

                {/* Add other Documents File Upload */}
                <div className="question-text">Add other Documents</div>
                <input type="file" className="edit-box" />

                {/* Name of Institution */}
                <div className="question-text">Name of Institution</div>
                <input type="text" className="edit-box" />

                {/* Status */}
                <div className="question-text">Status</div>
                <input type="text" className="edit-box" />

                {/* Handle navigation on button click */}
                <button className="blue-button" onClick={handleNextClick}>Save</button>
            </div>
        </div>
    );
};

export default EducationPage;
