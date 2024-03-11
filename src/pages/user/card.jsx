import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const MediaCard = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${authToken} `};
        const response = await axios.get("http://localhost:8181/api/v1/users/Loan/all", { headers });
        
        console.log(response.data.data)
        if (Array.isArray(response.data.data)) {
          setCardsData(response.data.data);
          // console.log(response.data.data);
        } else {
          console.error("Error: Data received from API is not an array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-clr-gray pb-16 m-29">
      <div className="flex justify-center items-center " style={{backgroundColor:'white'}}>
        <h1 className="text-4xl font-bold text-center" style={{width:100}}>LOANS</h1>
      </div>
      <div className="flex flex-wrap justify-between ml-5 mr-5" style={{justifyContent:'space-between',display:'flex',flexDirection:'row'}}>
        {cardsData.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2" >
            <Card sx={{ maxWidth: 345, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
              {/* <CardMedia
                sx={{ height: 140 }}
                image={card.data?.loan_image || ''} // Use optional chaining to avoid error
                title={card.data?.loan_name || ''}
              /> */}
            <img src={card.loan_image} alt={card.data?.loan_name || ''} style={{ maxWidth: '100%' }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.loan_desc}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.data?.loan_desc || ''}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link to={`/learn-more/${card.id || ''}`}>Learn More</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaCard;