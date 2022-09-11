import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './prestationCreate.scss';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

function PrestationCreate({
  className,
  isLogged,
  id,
  item,
  prestation,
  onHandleClickCreate,
  ...rest
}) {
  console.log('hello dans presta create');
  console.log(id);
  console.log(isLogged);
  console.log((item));
  console.log('prestation', prestation);
  return (
    <div
      className={classnames('prestationCreate', className)}
      {...rest}
    >
      hello dans presta create
      <CardContent>
        <Typography className="prestations-card__title" gutterBottom variant="h5" component="div">
          {item}
        </Typography>
        <div className="prestations-card__price">
          ggg
        </div>
        <Typography variant="body2" color="text.secondary">
          rrr
        </Typography>
      </CardContent>
    </div>
  );
}

PrestationCreate.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  item: PropTypes.array.isRequired,
  prestation: PropTypes.object.isRequired,
  onHandleClickCreate: PropTypes.func.isRequired,
};
PrestationCreate.defaultProps = {
  className: '',
};
export default React.memo(PrestationCreate);
