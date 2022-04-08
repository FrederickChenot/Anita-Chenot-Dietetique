import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './legalnotice.scss';

const img = [
  {
    UrlFlower: `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_SERVER}/image/upload/v1649348076/flower_kqfaxr.jpg`,
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
          <Typography gutterBottom variant="h5" component="div">
            Mentions Légales
          </Typography>
          <Typography className="prisederendezvous-description" variant="body2" color="text.secondary">
            <ListItem>
              Site édité par Anita Chenot – Conception et réalisation par Fred Chenot
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
              Diététicienne nutritionniste enregistrée sous le n°ADELI :
            </ListItem>
            <ListItem>
              Directrice de la publication : Anita Chenot
            </ListItem>
            <ListItem>
              Hébergeur du site :
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
