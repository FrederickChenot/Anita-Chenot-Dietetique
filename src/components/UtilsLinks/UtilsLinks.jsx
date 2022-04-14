import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';
import Chip from '@mui/material/Chip';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import './utilslinks.scss';
import canopy from '../../images/canopy.jpg';

const img = [
  {
    UrlFlower: canopy,
    Name: 'fleur',
  },
];
function UtilsLinks({ className, ...rest }) {
  return (
    <div
      className={classnames('utilsLinks', className)}
      {...rest}
    >
      <Card className="utilsLinks-card" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={img[0].Name}
          height="140"
          image={img[0].UrlFlower}

        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="utilsLink-card"
            sx={{
              marginLeft: '0.7em',

            }}
          >
            Partenariats
          </Typography>
          <Typography className="utilsLinks-description" variant="body2" color="text.secondary">
            <ListItem className="utilsLinks-item">

              <a href="https://lorraine.msa.fr/lfp" target="_blank" rel="noreferrer">
                <Chip
                  label="MSA"
                  clickable
                  sx={{
                    color: '#9C27B0',
                    fontSize: '1em',

                  }}
                />
                Je suis conventionnée pour plusieurs prestations :
                Accompagnement Nutritionnel « Nutri Déclic » proposé par le médecin traitant dans le cadre d’un bilan de prévention.
                Animation Nutritionnelle dans le cadre des Instants Santé
              </a>
            </ListItem>
            <ListItem className="utilsLinks-item">

              <a href="http://www.aseptlorraine.fr/" target="_blank" rel="noreferrer">
                <Chip
                  label="ASEPT"
                  clickable
                  sx={{
                    color: '#9C27B0',
                    fontSize: '1em',

                  }}
                />
                Lorraine (Association Santé Education et Prévention sur les Territoires) :
                Je suis conventionnée pour plusieurs animations à destination de publics variés :
                Atelier n°8 « Alimentation et Prévention Santé » dans le cadre d’un cycle Nutrition Santé Séniors.
                Ateliers « Nutrition Santé Adolescents ».
                Ateliers « Nutrition Santé Petite Enfance ».
              </a>
            </ListItem>
            <ListItem className="utilsLinks-item">

              <a href="http://www.avrsante.com/" target="_blank" rel="noreferrer">
                <Chip
                  label="AVRS"
                  clickable
                  sx={{
                    color: '#9C27B0',
                    fontSize: '1em',

                  }}
                />
                (Association Vosgienne des Réseaux de Santé) :
                J’ai une formation de niveau I à la démarche d’Education Thérapeutique du Patient (ETP) et une formation de 21h intitulée Coordonner un programme d’ETP, les fondamentaux ».
                Je réalise des bilans éducatifs partagés et des évaluations de parcours, et j’anime des séances individuelles ou collectives d’ETP pour plusieurs programmes portés par l’AVRS.
                Je coordonne le programme « Education Thérapeutique des Enfants et Adolescents présentant un Surpoids ou une Obésité ou un Rebond Précoce d’adiposité » porté par l’AVRS.

              </a>
            </ListItem>

          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

UtilsLinks.propTypes = {
  className: PropTypes.string,
};
UtilsLinks.defaultProps = {
  className: '',
};
export default React.memo(UtilsLinks);
