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
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { TextField } from '@mui/material';
import { requestPrestations, requestPrestationsDelete, requestPrestationsModify } from '../../requests/prestations';
import customTheme from '../../themes/customTheme';
import PrestationCreate from '../PrestationCreate/PrestationCreate';

function Prestations({
  className,
  isLogged,
  ...rest
}) {
  const [prestation, setPrestation] = useState([]);
  const [modalModify, setModalModify] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [titlePrestation, setTitlePrestation] = useState();
  const [idPrestation, setIdPrestation] = useState();
  const navigate = useNavigate;
  useEffect(async () => {
    const response = await requestPrestations();
    if (response.status === 200) {
      setPrestation(response.data);
      // console.log('reponse.data dans prestation jsx', response.data);
    }
    else {
      console.log('response front', response);
      navigate('/error');
    }
  }, []);
  const handleClick = (item) => {
    if (item.Id === 3 || item.Id === 4) {
      console.log('hello');
      window.location.href = 'tel:0606452788';
    }
    else {
      window.open('https://www.clicrdv.com/anita-chenot', '_blank');
    }
  };
  const handleClickDelete = async (id, title) => {
    console.log('id de presta', id);
    console.log('title de presta', title);
    const resultat = window.confirm(`CONFIRMER LA SUPRESSION DE : **${title}**`);
    if (resultat) {
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

  const handleClickModify = (id, img, title, description, prix, index) => {
    console.log(id, img, title, description, prix, index);
    setSelectedId(index);
    setModalModify(true);
  };

  const handleClickCreate = (id, img, title, description, prix) => {
    console.log(id, img, title, description, prix);
    setLoader(true);
  };

  const handleClickAbord = () => {
    setModalModify(false);
  };
  const handleSubmitPrestation = async () => {
    // event.preventDefault();
    console.log(idPrestation);
    console.log(titlePrestation);
    // setTitlePestation(value);
    const response = await requestPrestationsModify(idPrestation, titlePrestation);
    if (response.status === 200) {
      console.log('reponse.data dans submit:', response.data);
      const response2 = await requestPrestations();
      if (response2.status === 200) {
        setPrestation(response2.data);
      // console.log('reponse.data dans prestation jsx', response.data);
      }
    }
    else {
      navigate('/error');
    }
  };

  const handleChangeTitle = (id, value) => {
    console.log(id, value);
    setTitlePrestation(value);
    setIdPrestation(id);
  };

  const handleChangePrice = (item) => {
    console.log('hello dans change price', item);
  };

  const handleChangeDescription = (item) => {
    console.log('hello dans change description', item);
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
              key={item.id}
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
                <ThemeProvider theme={customTheme}>
                  <Button
                    key={item.id}
                    size="small"
                    className="prestations-link"
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      handleClickDelete(item.id, item.title);
                    }}
                  >
                    <DeleteForeverIcon />
                  </Button>
                  <Button
                    key={item.Id}
                    size="small"
                    className="prestations-link"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleClickModify(item.id, item.img, item.title, item.description, item.prix, prestation.indexOf(item));
                    }}
                  >

                    <AutoFixHighIcon />
                  </Button>

                  <NavLink
                    to="/create"
                  >
                    <Button
                      key={item.Id}
                      size="small"
                      className="prestations-link"
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        handleClickCreate(item.id, item.img, item.title, item.description, item.prix);
                      }}

                    >
                      {
                          loader ? (
                            <PrestationCreate />
                          ) : ''
                        }
                      <AddBoxIcon />
                    </Button>
                  </NavLink>
                </ThemeProvider>
              )
              : '' }

          </CardActions>
        </Card>
      ))}

      {
                        modalModify && (
                        <div className="modalModify">
                          <form action="" className="form-data__inputPrestation" onSubmit={handleSubmitPrestation}>
                            <CardMedia
                              key={prestation[selectedId].title}
                              component="img"
                              alt={prestation[selectedId].img}
                              height="140"
                              image={prestation[selectedId].img}
                            />
                            <CardContent
                              className="form-data__inputTextfield"
                            >
                              <TextField
                                key={prestation[selectedId].title}
                                id="outlined-disabled"
                                required
                                label="Titre prestation"
                                defaultValue={prestation[selectedId].title}
                                onChange={(event) => handleChangeTitle(prestation[selectedId].id, event.target.value)}
                              />
                              <TextField
                                key={prestation[selectedId].prix}
                                id="outlined-disabled"
                                required
                                label="Prix en euros / personne"
                                defaultValue={prestation[selectedId].prix}
                                onChange={(event) => handleChangePrice(prestation[selectedId].id, event.target.value)}
                              />
                              <TextField
                                key={prestation[selectedId].description}
                                id="outlined-disabled"
                                required
                                multiline
                                maxRows={3}
                                label="Description"
                                defaultValue={prestation[selectedId].description}
                                onChange={(event) => handleChangeDescription(prestation[selectedId].id, event.target.value)}
                              />
                            </CardContent>
                            <CardActions>
                              <Button
                                key={prestation[selectedId].id}
                                size="small"
                                className="prestations-link"
                                variant="contained"
                                color="warning"
                                type="submit"
                              >
                                VALIDER LES MODIFICATIONS
                              </Button>
                            </CardActions>
                            <CardActions>
                              <Button
                                key={prestation[selectedId].id}
                                size="small"
                                className="prestations-link"
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                  handleClickAbord();
                                }}
                              >
                                ANNULER
                              </Button>
                            </CardActions>
                          </form>
                        </div>
                        )
                      }
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
