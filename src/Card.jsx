import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';

export default function MediaCard( 
    //add props name
    {
        name ,desc
    }
 ) {
  return (
    <Card sx={{ maxWidth: 345 }} className='mycard' >
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
           <a href="tel:8789465702">Buy</a>
            </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}