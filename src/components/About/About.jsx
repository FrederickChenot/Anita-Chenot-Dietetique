import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './about.scss';

const img = [
  {
    UrlGallet: `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_SERVER}/image/upload/q_51/v1649347674/gallet_yr8el1.jpg`,
    Name: 'gallet',
  },
];

function About({ className, ...rest }) {
  return (
    <div
      className={classnames('about', className)}
      {...rest}
    >
      <Card className="about-card" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={img[0].Name}
          height="140"
          image={img[0].UrlGallet}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mon Parcours
          </Typography>
          <Typography className="prisederendezvous-description" variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ipsam repudiandae quae labore eligendi consectetur temporibus reiciendis modi numquam officia, a nihil at harum, ducimus dolorem voluptas debitis ipsum blanditiis!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

About.propTypes = {
  className: PropTypes.string,
};
About.defaultProps = {
  className: '',
};
export default React.memo(About);
