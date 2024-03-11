import React, { useState } from 'react';
import ResponsiveAppBar from '../user/Navbar';
import '../../assets/css/Loanapply.css';
import axios from 'axios';

function LoanApplicationForm() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [place, setPlace] = useState('');
    const [aadharnumber, setAadharnumber] = useState('');
    const [type, setType] = useState('croploan');
    const [loanamount, setLoanamount] = useState('');
    const [phnumber, setPhnumber] = useState('');
    const [income, setIncome] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            firstname,
            lastname,
            place,
            aadharnumber,
            type,
            loanamount,
            phnumber,
            income,
            agreement
        };

        try {
            const authToken = localStorage.getItem("token");
            const headers = {Authorization: `Bearer ${authToken} `};
    
            const response = await axios.post('http://localhost:8181/customer/add', formData, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json',
                }
            });
            
            if (response.status === 200) {
                console.log("yess")
                setShowPopup(true);
                // Reset fields
                setFirstname('');
                setLastname('');
                setPlace('');
                setAadharnumber('');
                setType('croploan');
                setLoanamount('');
                setPhnumber('');
                setIncome('');
                setAgreement(false);
            } else {
                // Handle error response
                console.log(response.status)
            }
        } catch (error) {
            // Handle fetch error
            console.error('Error submitting loan application:', error);
            setError('Failed to submit loan application. Please check your internet connection.');
        }
    };

    return (
        <div>
            <ResponsiveAppBar />
            <div className="container">
                <h1>Loan Application Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id="firstname" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required /><br /><br />

                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" id="lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required /><br /><br />

                    <label htmlFor="place">Place:</label>
                    <input type="text" id="place" name="place" value={place} onChange={(e) => setPlace(e.target.value)} required /><br /><br />

                    <label htmlFor="aadhar">Aadhar Card Number:</label>
                    <input type="text" id="aadhar" name="aadharnumber" value={aadharnumber} onChange={(e) => setAadharnumber(e.target.value)} required /><br /><br />

                    <label htmlFor="type">Type of Loan:</label>
                    <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="croploan">Crop Loan</option>
                        <option value="farmmech">Farm Machinery Loan</option>
                        <option value="livestk">Livestock Loan</option>
                        <option value="warehse">Warehouse Loan</option>
                        <option value="solarpmp">Solar Pump Loan</option>
                        <option value="landpur">Land Purchase Loan</option>
                    </select><br /><br />

                    <label htmlFor="amount">Loan Amount:</label>
                    <input type="number" id="amount" name="loanamount" value={loanamount} onChange={(e) => setLoanamount(e.target.value)} required /><br /><br />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phnumber" value={phnumber} onChange={(e) => setPhnumber(e.target.value)} required /><br /><br />

                    <label htmlFor="income">Income:</label>
                    <input type="number" id="income" name="income" value={income} onChange={(e) => setIncome(e.target.value)} required /><br /><br />

                    <label>
                        <input type="checkbox" name="agreement" checked={agreement} onChange={(e) => setAgreement(e.target.checked)} required /> I hereby agree that the information given is true, accurate, and complete as of the date of this application submission.
                    </label><br /><br />

                    <button type="submit" >Apply for Loan</button>
                </form>
            </div>

            {showPopup && (
                <div className="popup-container">
                    <div className="popup">
                        <p>Thank you for applying for the loan!</p>
                        <p>We will review your application shortly.</p><br />
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoanApplicationForm;