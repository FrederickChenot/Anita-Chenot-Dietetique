import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ImageList } from '@mui/material';
import carouselImg from '../../data/carousel-img';
import './carousel.scss';

function CarouselPhotos() {
  return (
    <ImageList className="carousel">
      {carouselImg.map((item) => (
        <Card
          className="carousel-card"
          sx={{ maxWidth: 300 }}
        >
          <CardMedia
            component="img"
            height="140"
            image={item.UrlImg}
            alt={item.Title}
          />
        </Card>
      ))}
    </ImageList>
  );
}

export default React.memo(CarouselPhotos);
