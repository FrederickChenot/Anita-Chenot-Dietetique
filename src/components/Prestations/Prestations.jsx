import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './prestations.scss';
import prestations from '../../data/prestations';

function Prestations({ className, ...rest }) {
  const handleClick = () => {
    window.open('https://www.clicrdv.com/anita-chenot', '_blank');
  };
  return (
    <div
      className={classnames('prestations', className)}
      {...rest}
    >
      {prestations.map((item) => (
        <Card
          sx={{ maxWidth: 345 }}
          className="prestations-card"
        >
          <CardMedia
            component="img"
            alt={item.Title}
            height="140"
            image={item.UrlImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium, asperiores laboriosam necessitatibus unde molestiae totam corrupti, voluptatum reiciendis quisquam officia impedit vitae repellat possimus reprehenderit. Nihil incidunt optio natus!
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              className="prestations-link"
              variant="contained"
              color="secondary"
              onClick={handleClick}
            >
              Prendre rendez-vous
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

Prestations.propTypes = {
  className: PropTypes.string,
};
Prestations.defaultProps = {
  className: '',
};
export default React.memo(Prestations);
