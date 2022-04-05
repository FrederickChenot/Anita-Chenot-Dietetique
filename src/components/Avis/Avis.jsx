import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './avis.scss';
import imgIconeZen from '../../images/icone-zen.jpg';

function Avis({ className, ...rest }) {
  const handleClick = () => {
    window.open('https://www.pagesjaunes.fr/contribution/avis_reglem_flow/51410609/note_globale?codeRubrique=58400300', '_blank');
  };
  return (
    <div
      className={classnames('avis', className)}
      {...rest}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="exterior-zen-japanese"
          height="140"
          image={imgIconeZen}
        />
        <CardContent>
          <div className="avis-title">
            <div className="avis-text">
              <Typography gutterBottom variant="h5" component="div">
                Laissez moi un avis
              </Typography>
            </div>
            <div className="avis-faceIcon">
              <TagFacesIcon sx={{ color: '#9C27B0' }} />
            </div>

          </div>

          <Typography className="prisederendezvous-description" variant="body2" color="text.secondary">
            Une nouvelle fenêtre va s'ouvrir en cliquant sur le bouton ci dessous. Laissez vous guider sur le site pagesjaunes.fr
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

Avis.propTypes = {
  className: PropTypes.string,
};
Avis.defaultProps = {
  className: '',
};
export default React.memo(Avis);
