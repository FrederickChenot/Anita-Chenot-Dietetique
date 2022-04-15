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
  const handleClick = (item) => {
    console.log('id:', item.Id);
    if (item.Id === 3 || item.Id === 4) {
      console.log('hello');
      window.location.href = 'tel:0606452788';
    }
    else {
      window.open('https://www.clicrdv.com/anita-chenot', '_blank');
    }
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
            <Typography className="prestations-card__title" gutterBottom variant="h5" component="div">
              {item.Title}
            </Typography>
            <div className="prestations-card__price">
              {item.Price}
            </div>
            <Typography variant="body2" color="text.secondary">
              {item.Description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              key={item.Id}
              size="small"
              className="prestations-link"
              variant="contained"
              color="secondary"
              onClick={() => {
                handleClick(item);
              }}
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
