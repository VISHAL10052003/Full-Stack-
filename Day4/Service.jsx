import { Grid, Card, CardContent, CardMedia,  Typography } from '@mui/material';
import '/src/assets/css/Service.css'



export default function Service() {
  return (
    <>
    <div className='jd'>
    <Grid container spacing={1} direction="row">
      <Grid item xs={4}>
        <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4 }}>
          <CardMedia
          
          sx={{ height: 170 }}
          image="/src/assets/images/card01.jpg"
          title="PRECISION AGRICULTURE"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
           <center> PRECISION AGRICULTURE</center>
            </Typography>
            <Typography variant="body2" color="text.secondary">
           <center> Farm management equipment and services based on long / short range weather, NDVI imagery, crop observation, measurement, and response to inter and intra-field variability in crops.</center>
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4}}>
          <CardMedia
            sx={{ height: 160 }}
            image="/src/assets/images/digital.png"
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
           <center> DIGITAL MANAGEMENT PLATFORM</center>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <center>Digital Decision Support System for whole farm management with the goal of optimizing returns on inputs while preserving resources.</center>
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className="zoomCard" sx={{ maxWidth: 400  ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4}}>
          <CardMedia
            sx={{ height: 140 }}
            image="/src/assets/images/argonomy.jpg"
            title="green iguana"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
           <center> AGRONOMIC & FIELD WORKABILITY ADVISORY</center>
            </Typography>
            <Typography variant="body2" color="text.secondary">
           <center> Farm management equipment and services based on long / short weather, NDVI imagery, crop observation, measurement, and response to inter and intra-field variability in crops.</center>
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
        <br></br><br></br><br></br>
      </Grid>



      {/* <div className='col-card'>
      <Grid container spacing={21.2} direction="row">
      <Grid item xs={4}>
      <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4}}>
      <CardMedia
      sx={{ height: 190 }}
      image="/src/assets/images/mark.jpeg"
      title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Event Branding and Marketing
      </Typography>
      <Typography variant="body2" color="text.secondary">
      At Purple Fox, we understand the power of effective event branding and marketing strategies. Whether youre organizing a corporate conference, a product launch, or a social celebration, our team of creative minds is committed to elevating your event to new heights. We work closely with you to develop a unique brand identity for your event, ensuring that every aspect aligns seamlessly with your vision and goals.
      </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4 }}>
      <CardMedia
      sx={{ height: 200 }}
      image="/src/assets/images/virt.png"
      title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Virtual Event Management
      </Typography>
      <Typography variant="body2" color="text.secondary">
      In todays dynamic world, the need for impactful virtual experiences is more significant than ever, and Purple Fox is at the forefront of this evolution. Our dedicated team of professionals leverages cutting-edge technology to seamlessly transform your events into immersive virtual journeys.he need for impactful virtual experiences is more significant than ever, and Purple Fox is at the forefront of this evolution.
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
            </Grid>
      <Grid item xs={4}>
      <Card className="zoomCard" sx={{ maxWidth: 400 ,boxShadow: '10px 4px 30px rgba(0, 0, 0, 0.1)', borderRadius: 4 }}>
      <CardMedia
      sx={{ height: 190 }}
      image="/src/assets/images/vendor.webp"
      title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Vendor Management
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Our approach to Vendor Management goes beyond the conventional, as we meticulously select and coordinate with a network of trusted partners to enhance every aspect of your event. Whether its sourcing high-quality catering, securing cutting-edge audio-visual equipment, or collaborating with talented decorators, Purple Fox is dedicated to delivering a comprehensive and stress-free vendor experience.
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
      </Grid>
      </Grid>
    </div> */}
    </Grid>
   </div>
    </>
  );
}