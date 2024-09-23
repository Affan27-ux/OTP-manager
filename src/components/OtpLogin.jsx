import React from 'react'
import { useState } from 'react'
import OtpInput from './OtpInput';

const OtpLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        // phone validations
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid Phone Number");
            return;
        }

        // Call BE API
        // show OTP Field
        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>

            {!showOtpInput ? (
                <form onSubmit={handlePhoneSubmit} >
                    <h2 className="text-2xl font-bold text-center text-gray-800">Phone Login</h2>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        placeholder="Enter Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:border-indigo-500"
                    />
                    <button className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 transition-colors" type="submit">
                        Submit
                    </button>
                </form>
            ) : (
                <div className="space-y-4 text-center">
                    <p className="text-black">Enter OTP sent to <span className="font-bold">{phoneNumber}</span></p>
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                </div>
            )}
        </div>

    );
};

export default OtpLogin;
