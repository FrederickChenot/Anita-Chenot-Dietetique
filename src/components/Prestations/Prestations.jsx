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
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { requestPrestations, requestPrestationsDelete } from '../../requests/prestations';

function Prestations({
  className,
  isLogged,
  ...rest
}) {
  const [prestation, setPrestation] = useState([]);
  const navigate = useNavigate;
  useEffect(async () => {
    const response = await requestPrestations();
    if (response.status === 200) {
      setPrestation(response.data);
      console.log('reponse.data dans prestation jsx', response.data);
    }
    else {
      console.log('response front', response);
      navigate('/error');
    }
  }, []);
  const handleClick = (item) => {
    console.log('id::::::::', item.Id);
    if (item.Id === 3 || item.Id === 4) {
      console.log('hello');
      window.location.href = 'tel:0606452788';
    }
    else {
      window.open('https://www.clicrdv.com/anita-chenot', '_blank');
    }
  };
  const handleClickDelete = async (id) => {
    console.log('id de presta', id);
    const resultat = prompt('Si vous Voulez vous supprimer la prestation taper OUI');
    if (resultat === 'OUI') {
      await requestPrestationsDelete(id);
      const response = await requestPrestations();
      if (response.status === 200) {
        setPrestation(response.data);
      }
    }
    else {
      alert('suppression annulée');
    }
  };

  return (
    <div
      className={classnames('prestations', className)}
      {...rest}
    >
      {prestation.map((item) => (
        <Card
          key={item.id}
          sx={{ maxWidth: 345 }}
          className="prestations-card"
        >
          <CardMedia
            key={item.title}
            component="img"
            alt={item.img}
            height="140"
            image={item.img}
          />
          <CardContent>
            <Typography className="prestations-card__title" gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <div className="prestations-card__price">
              {item.prix}
            </div>
            <Typography variant="body2" color="text.secondary">
              {item.description}
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

            {isLogged
              ? (
                <Button
                  key={item.Id}
                  size="small"
                  className="prestations-link"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleClickDelete(item.id);
                  }}
                >SUPPRIMER
                </Button>
              )
              : '' }

          </CardActions>
        </Card>
      ))}
    </div>
  );
}

Prestations.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool.isRequired,
};
Prestations.defaultProps = {
  className: '',
};
export default React.memo(Prestations);
