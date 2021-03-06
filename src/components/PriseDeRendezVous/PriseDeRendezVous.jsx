import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './prisederendezvous.scss';
import japanOutside from '../../images/japanOutside.jpg';

const img = [
  {
    UrlOutdoorJapanese: japanOutside,
    Name: 'outdoor Japanese',
  },
];

function PriseDeRendezVous({ className, ...rest }) {
  const handleClick = () => {
    window.open('https://www.clicrdv.com/anita-chenot', '_blank');
  };
  return (
    <div
      className={classnames('prisederendezvous', className)}
      {...rest}
    >
      <Card className="prisederendezvous-card" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={img[0].Name}
          height="140"
          image={img[0].UrlOutdoorJapanese}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Prenez Rendez-vous
          </Typography>
          <Typography className="prisederendezvous-description" variant="body2" color="text.secondary">
            Une nouvelle fenêtre va s'ouvrir en cliquant sur le bouton ci dessous. Laissez vous guider sur le site clicrdv.com
          </Typography>
        </CardContent>
        <CardActions className="prisederendezvous-link">
          <Button
            size="small"
            className="prisederendezvous-link"
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Cliquez ici
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

PriseDeRendezVous.propTypes = {
  className: PropTypes.string,
};
PriseDeRendezVous.defaultProps = {
  className: '',
};
export default React.memo(PriseDeRendezVous);
