import * as React from 'react';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from './Navbar';
import { useParams } from 'react-router-dom';

const Farmmech = () => {

  const loans = [
    1, {
      name: "Farm mech",
      des: "<p><h3>Purpose	= For cultivation of crops<br /> Eligibility = Farmers - individual/joint borrowers who are owner cultivatorsTenant farmers, oral lessees & share croppers<br /> Eligible amount	=   Upto ₹3,00,000/- with Interest Subvention Above ₹3,00,000/- without Interest Subvention<br /> Period of Loan & Repayment = 5 Years Annual Repayment (Renewable every year )<br />Rate of Interest  = Please refer Interest rate chart / visit our nearest branch <br />Processing Charges =   Upto ₹25,000/- - NILAbove ₹25,000/- - ₹300/- per lakh or part there of <br />Security  =  Upto ₹25,000/- - Hypothecation of cropsAbove ₹25,000/- - Collateral security by way of Mortgage (or) Gold<br />How to apply = Please contact nearest Tamil Nadu Grama Bank’s Branch for more details<br /></h3></p>"
    },
    2,{name:'Cropcloan',
    des:"<p><h3>Purpose	= For cultivation of crops<br/>Eligibility = Farmers - individual/joint borrowers who are owner cultivatorsTenant farmers, oral lessees & share croppers<br/>Eligible amount	=   Upto ₹3,00,000/- with Interest Subvention Above ₹3,00,000/- without Interest Subvention<br/>Period of Loan & Repayment = 5 YearsAnnual Repayment (Renewable every year )<br/>Rate of Interest  = Please refer Interest rate chart / visit our nearest branch <br/>Processing Charges =   Upto ₹25,000/- - NILAbove ₹25,000/- - ₹300/- per lakh or part there of <br/>Security  =  Upto ₹25,000/- - Hypothecation of cropsAbove ₹25,000/- - Collateral security by way of Mortgage (or) Gold<br/>How to apply = Please contact nearest Tamil Nadu Grama Bank’s Branch for more details<br/></h3></p>"
  } ,
    3,
    {name:'Land purchase loan',
    des:"<p><h3>Purpose	= For cultivation of crops<br/>Eligibility = Farmers - individual/joint borrowers who are owner cultivatorsTenant farmers, oral lessees & share croppers<br/>Eligible amount	=   Upto ₹3,00,000/- with Interest Subvention Above ₹3,00,000/- without Interest Subvention<br/>Period of Loan & Repayment = 5 Years\Annual Repayment (Renewable every year )<br/>\Rate of Interest  = Please refer Interest rate chart / visit our nearest branch <br/>\Processing Charges =   Upto ₹25,000/- - NIL\Above ₹25,000/- - ₹300/- per lakh or part there of <br/>Security  =  Upto ₹25,000/- - Hypothecation of cropsAbove ₹25,000/- - Collateral security by way of Mortgage (or) Gold<br/>How to apply = Please contact nearest Tamil Nadu Grama Bank’s Branch for more details<br/></h3></p>"
    },
    4,
    {name:'Live stock loan',
    des: "<p><h3>Purpose	= For cultivation of crops<br/>Eligibility = Farmers - individual/joint borrowers who are owner cultivatorsTenant farmers, oral lessees & share croppers<br/>Eligible amount	=   Upto ₹3,00,000/- with Interest Subvention Above ₹3,00,000/- without Interest Subvention<br/>Period of Loan & Repayment = 5 YearsAnnual Repayment (Renewable every year )<br/>Rate of Interest  = Please refer Interest rate chart / visit our nearest branch <br/>Processing Charges =   Upto ₹25,000/- - NILAbove ₹25,000/- - ₹300/- per lakh or part there of <br/>Security  =  Upto ₹25,000/- - Hypothecation of cropsAbove ₹25,000/- - Collateral security by way of Mortgage (or) Gold<br/>How to apply = Please contact nearest Tamil Nadu Grama Bank’s Branch for more details<br/></h3></p>"
    }
    ,
    5,
    {name:'Ware house loan',
    des: "<p><h3>Purpose	= For cultivation of crops<br/>Eligibility = Farmers - individual/joint borrowers who are owner cultivatorsTenant farmers, oral lessees & share croppers<br/>Eligible amount	=   Upto ₹3,00,000/- with Interest Subvention Above ₹3,00,000/- without Interest Subvention<br/>Period of Loan & Repayment = 5 YearsAnnual Repayment (Renewable every year )<br/>Rate of Interest  = Please refer Interest rate chart / visit our nearest branch <br/>Processing Charges =   Upto ₹25,000/- - NILAbove ₹25,000/- - ₹300/- per lakh or part there of <br/>Security  =  Upto ₹25,000/- - Hypothecation of cropsAbove ₹25,000/- - Collateral security by way of Mortgage (or) Gold<br/>How to apply = Please contact nearest Tamil Nadu Grama Bank’s Branch for more details<br/></h3></p>"
    }
    ,
    6,
    {name:'Solar pump loan',
    des: "<p><h3>Purpose	= For cultivation of crops<br/>Eligibility = Farmers - individual/joint borrowers who are owner cultivatorsTenant farmers, oral lessees & share croppers<br/>Eligible amount	=   Upto ₹3,00,000/- with Interest Subvention Above ₹3,00,000/- without Interest Subvention<br/>Period of Loan & Repayment = 5 YearsAnnual Repayment (Renewable every year )<br/>Rate of Interest  = Please refer Interest rate chart / visit our nearest branch <br/>Processing Charges =   Upto ₹25,000/- - NILAbove ₹25,000/- - ₹300/- per lakh or part there of <br/>Security  =  Upto ₹25,000/- - Hypothecation of cropsAbove ₹25,000/- - Collateral security by way of Mortgage (or) Gold<br/>How to apply = Please contact nearest Tamil Nadu Grama Bank’s Branch for more details<br/></h3></p>"
    }
  ]
  let {id} = useParams();

return (
  <>
    <ResponsiveAppBar />
    <div style={{ maxWidth: 1500 }}>
      <img
        src="src/assets/images/fml.jpg"
        alt="Your Image"
        // style={{ width: '100%', height: 'auto', padding:'00px' }}
        style={{ width: '100%', margin: "0" }}
      />
      <div style={{ padding: '30px' }}>
        <Typography gutterBottom variant="h5" component="div">{loans.id}</Typography>
        <Typography variant="body1" color="text.secondary"></Typography>
      </div>
    </div>
  </>
);
}
export default Farmmech;