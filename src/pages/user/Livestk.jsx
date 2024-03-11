import * as React from 'react';
import Typography from '@mui/material/Typography';

const Livestk = () =>  {
  return (
    <div style={{ maxWidth: 400 }}>
        <br/>
        <br/>

      <img
        src="src/assets/images/lsl.jpg"
        alt="Your Image"
        style={{ width: '150%', height: 'auto', padding:'30px' }}
      />
      <div style={{ padding: '30px' }}>
        <Typography gutterBottom variant="h5" component="div">
       <h1>  Livestock Loans Loans</h1>
        </Typography>
        <Typography variant="body1" color="text.secondary">
        <p><h3>Purpose	= For cultivation of crops<br/>
        Eligibility = Farmers - individual/joint borrowers who are owner cultivatorsTenant farmers, oral lessees & share croppers<br/>
        Eligible amount	=   Upto ₹3,00,000/- with Interest Subvention Above ₹3,00,000/- without Interest Subvention<br/>
        Period of Loan & Repayment = 5 Years
Annual Repayment (Renewable every year )<br/>
Rate of Interest  = Please refer Interest rate chart / visit our nearest branch <br/>
Processing Charges =   Upto ₹25,000/- - NIL
Above ₹25,000/- - ₹300/- per lakh or part there of <br/>

Security  =  Upto ₹25,000/- - Hypothecation of crops
Above ₹25,000/- - Collateral security by way of Mortgage (or) Gold<br/>
How to apply = Please contact nearest Tamil Nadu Grama Bank’s Branch for more details<br/>
</h3>
</p>



        </Typography>
      </div>
    </div>
  );
}
export default Livestk;