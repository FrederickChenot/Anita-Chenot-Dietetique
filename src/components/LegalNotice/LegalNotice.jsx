import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';
import Chip from '@mui/material/Chip';

import PropTypes from 'prop-types';
import classnames from 'classnames';
import './legalnotice.scss';
import waterLilyFlower from '../../images/waterLilyFlower.jpg';

const img = [
  {
    UrlFlower: waterLilyFlower,
    Name: 'fleur',
  },
];
function LegalNotice({ className, ...rest }) {
  return (
    <div
      className={classnames('legalnotice', className)}
      {...rest}
    >
      <Card className="legalnotice-card" sx={{ maxWidth: 345 }}>
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
            sx={{
              marginLeft: '0.7em',

            }}
          >
            Mentions Légales
          </Typography>
          <Typography className="prisederendezvous-description" variant="body2" color="text.secondary">
            <ListItem>
              Site édité par Anita Chenot
            </ListItem>
            <ListItem>
              Conception et réalisation:
              <a href="http://www.linkedin.com/in/frederick-chenot" target="_blank" rel="noreferrer">
                <Chip
                  label="Fred Chenot"
                  clickable
                  sx={{
                    color: '#9C27B0',
                    fontSize: '1em',

                  }}
                />
              </a>
            </ListItem>
            <ListItem>
              Statut entrepreneur indivisuel enregistré sous le n° SIRET : 48445585200026
            </ListItem>
            <ListItem>
              Adresse : 3 rue du Paquis 88000 Jeuxey
              tél: 06 06 45 27 88
            </ListItem>
            <ListItem>
              mail : anitadietetique@gmail.com
            </ListItem>
            <ListItem>
              Diététicienne nutritionniste enregistrée sous le n°ADELI : 88 95 0032 8
            </ListItem>
            <ListItem>
              Directrice de la publication : Anita Chenot
            </ListItem>
            <ListItem>
              Photos:
              <a href="https://fr.freepik.com/home" target="_blank" rel="noreferrer">
                <Chip
                  label="freepik"
                  clickable
                  sx={{
                    color: '#9C27B0',
                    fontSize: '1em',

                  }}
                />
              </a>
              <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer">
                <Chip
                  label="pixabay"
                  clickable
                  sx={{
                    color: '#9C27B0',
                    fontSize: '1em',

                  }}
                />
              </a>
              <a href=" https://unsplash.com/" target="_blank" rel="noreferrer">
                <Chip
                  label="unsplash"
                  clickable
                  sx={{
                    color: '#9C27B0',
                    fontSize: '1em',

                  }}
                />
              </a>
            </ListItem>

            <ListItem>
              Hébergeur du site:
              <ListItem>
                <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
                  <Chip
                    label="netlify"
                    clickable
                    sx={{
                      color: '#9C27B0',
                      fontSize: '1em',

                    }}
                  />
                </a>
              </ListItem>
            </ListItem>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

LegalNotice.propTypes = {
  className: PropTypes.string,
};
LegalNotice.defaultProps = {
  className: '',
};
export default React.memo(LegalNotice);
