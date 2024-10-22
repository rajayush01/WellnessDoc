import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Form Component
const PatientFormPopup = ({ closeForm }) => {
    const [formData, setFormData] = useState({
        name: '',
        className: '',
        dob: '',
        weight: '',
        height: '',
        lastInoculatedTABC: '',
        bcg: '',
        tripleAntigen: '',
        tetanus: '',
        lastVaccinated: '',
        vision: '',
        infectiousDiseases: '',
        heartCondition: '',
        generalHealth: '',
        majorIllness: '',
        physicalDeformity: '',
        lastIllness: '',
        respiratoryDisorders: '',
        underMedication: '',
        otherRemarks: '',
        bloodGroup: '',
        parentName: '',
        parentAddress: '',
        parentPhone: '',
        parentMobile: '',
        parentEmail: '',
        parentDate: '',
        practitionerRegNo: '',
        practitionerName: '',
        practitionerAddress: '',
        practitionerPhone: '',
        practitionerMobile: '',
        practitionerEmail: '',
        practitionerDate: '',
    });

    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let newErrors = {};
        Object.keys(formData).forEach(key => {
            if (!formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, proceed with submission (e.g., API call)
            console.log('Form submitted successfully:', formData);
        } else {
            // Form is invalid, set errors state to display them
            setErrors(validationErrors);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-8 rounded-lg w-1/2 max-h-[80vh] overflow-y-auto">
                {/* Cross mark button */}
                <button 
                    className="absolute top-2 right-2 text-black text-xl" 
                    onClick={closeForm}
                >
                    &times;
                </button>
                
                <h2 className="text-2xl font-bold mb-4">Patient Health Form</h2>
                
                <form onSubmit={handleSubmit}>
                    {/* 1. Name and Class */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded-lg" 
                            placeholder="Enter name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Class</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border border-gray-300 rounded-lg" 
                            placeholder="Enter class"
                        />
                    </div>

                    {/* 2. Date of Birth */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Date of Birth</label>
                        <input 
                            type="date" 
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* 3. Weight */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Weight (kg)</label>
                        <input 
                            type="number" 
                            className="w-full p-2 border border-gray-300 rounded-lg" 
                            placeholder="Enter weight"
                        />
                    </div>

                    {/* 4. Height */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Height (cm)</label>
                        <input 
                            type="number" 
                            className="w-full p-2 border border-gray-300 rounded-lg" 
                            placeholder="Enter height"
                        />
                    </div>

                    {/* 5. When last inoculated for TABC? */}
                    <div className="mb-4">
                        <label className="block text-gray-700">When was last inoculated for TABC?</label>
                        <input 
                            type="date" 
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* 6. BCG */}
                    <div className="mb-4">
                        <label className="block text-gray-700">BCG</label>
                        <input 
                            type="date" 
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* 7. Last inoculated for Triple ANTIGEN, TETANUS */}
                    <div className="mb-4">
                        <label className="block text-gray-700">When was last inoculated for Triple ANTIGEN?</label>
                        <input 
                            type="date" 
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">TETANUS</label>
                        <input 
                            type="date" 
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* 8. Last VACCINATED */}
                    <div className="mb-4">
                        <label className="block text-gray-700">When was last VACCINATED?</label>
                        <input 
                            type="date" 
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>

                    {/* 9-19. Other Health Questions */}
                    {[
                        "Is vision normal?",
                        "Is free from infectious diseases?",
                        "Is the condition of heart normal?",
                        "What is the general condition of health?",
                        "Has the child any major illness e.g. epilepsy?",
                        "Has any physical deformity?",
                        "What illness/as has the child had in the last one year?",
                        "Is the child under treatment for asthma or respiratory disorders?",
                        "Is the child under any medication for heart condition / epilepsy / asthma?",
                        "Any other remarks",
                        "Blood Group",
                    ].map((question, index) => (
                        <div className="mb-4" key={index}>
                            <label className="block text-gray-700">{question}</label>
                            <input 
                                type="text" 
                                className="w-full p-2 border border-gray-300 rounded-lg" 
                                placeholder="Enter details"
                            />
                        </div>
                    ))}

                    {/* Signature fields */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-bold mb-2">Signature of Parent / Guardian</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Address</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter address"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Phone No.</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter phone number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Mobile</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter mobile number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">E-Mail</label>
                                <input 
                                    type="email" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Date</label>
                                <input 
                                    type="date" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Signature of Medical Practitioner</h3>
                            <div className="mb-4">
                                <label className="block text-gray-700">Registration No.</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter registration number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name of Medical Practitioner</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Address</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter address"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Phone No.</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter phone number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Mobile</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter mobile number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">E-Mail</label>
                                <input 
                                    type="email" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Date</label>
                                <input 
                                    type="date" 
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const DashboardPatient = () => {
    const [showForm, setShowForm] = useState(true); // Show form by default when patient logs in
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear session or authentication state if necessary
        navigate('/login');
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">Patient Dashboard</h1>

            {/* Display form popup if it's the first time */}
            {showForm && <PatientFormPopup closeForm={closeForm} />}

            {/* Other dashboard content */}

            <button 
                onClick={handleLogout} 
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
                Logout
            </button>
        </div>
    );
};

export default DashboardPatient;
