import React from 'react';
import './components/IkusasaProgram.css'; 

const IkusasaProgram = () => {
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
                        <button className="yellow-button">Education</button>
                    </div>
                    <div className="button-column">
                        <button className="yellow-button">Work Experience</button>
                    </div>
                </div>

                {/* Text: Fields with indicates required */}
                <div className="field-text">Fields with * indicate required</div>

                {/* Have you ever attended ikusasa program before */}
                <div className="question-text">
                    Have you ever attended an Ikusasa program before?
                </div>
                <input type="text" className="edit-box" />

                {/* Which role best describes you? */}
                <div className="question-text">Which role best describes you?</div>
                <input type="text" className="edit-box" />

                {/* Professional Skills */}
                <div className="question-text">Professional Skills</div>
                <input type="text" className="edit-box" />

                {/* Submit Button */}
                <button className="blue-button">Submit</button>
            </div>
        </div>
    );
};

export default IkusasaProgram;
