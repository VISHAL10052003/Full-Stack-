import React from 'react';
import ResponsiveAppBar from '../user/Navbar';
import Homepage from '../../assets/images/Homepage.jpg';
import '../../assets/css/Home.css';

const Home = () => {
  return (
    <div className='fun'>
      <ResponsiveAppBar />
      <div>
        <div className='text'>
         {/* <div className='hd'> <h1>Agri Finance</h1></div> */}
<div className='cr'><h1>Credit</h1></div><br/>
<div className='crc'><h3>Right input at right time makes a huge difference in the crop production level <br/> but unfortunately our farmers may not always have the required funds for<br/>
 large purchases at the right time. Our goal is to bring micro-financing for <br/> input purchase in partnership with leading agro financing institutions of the country.</h3></div>
<br></br>
<div className='in'><h1>Insurance</h1></div><br/>
<div className='inc'><h3>All said and done, nature still has an upper-hand on agricultural outcome <br/>
 so crop insurance is very vital for financial viability of farming and <br/>
  farmer’s livelihood. We are working closely with leading agro insurance <br/>
  companies in the country to bring right insurance products for benefit <br/>of the farmers in our network.</h3></div>
        </div>
        {<div className='image'>
          <img src={Homepage} alt="Home" />
        </div> }
      </div> 
    </div> 
  );
}

export default Home;