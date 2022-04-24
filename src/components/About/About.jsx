import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './about.scss';
import pebble from '../../images/pebble.jpg';

const img = [
  {
    pebble: pebble,
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
          image={img[0].pebble}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mon Parcours
          </Typography>
          <Typography className="about-description" variant="body2" color="text.secondary">
            De 1995 à 1997, j’ai étudié et obtenu un DUT de biologie appliquée, option diététique à Nancy.
            <p> En 2005, après avoir fondé une famille et travaillé dans plusieurs établissements de santé
              et dans différentes régions de France, je me suis installée dans les Vosges, pour exercer mon métier de diététicienne en libéral.
            </p>
            <p>
              Depuis 2008, je reçois les patients à Jeuxey pour des consultations.
            </p>
            <p>
              En parallèle, je travaille avec plusieurs EHPAD, j’anime des Ateliers Nutrition Santé pour différents publics,
              je participe à la mise en œuvre des programmes d’Education Thérapeutique du Patient portés par l’Association Vosgienne des
              Réseaux de Santé, basée à Epinal (surpoids, diabète, ostéoporose …).
            </p>
            <p>
              A cet effet, j’ai une formation de Niveau I à la démarche d’ETP.
            </p>
            <p>
              Récemment, dans un souci d’accompagner les personnes vers des changements alimentaires durables, j’ai obtenu un Diplôme Universitaire Psychologie et Pédagogie du Comportement Alimentaire.
            </p>

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
