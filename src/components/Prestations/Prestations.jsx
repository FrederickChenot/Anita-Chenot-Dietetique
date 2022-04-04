import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './prestations.scss';

function Prestations({ className, ...rest }) {
  console.log('hello');
  return (
    <div
      className={classnames('prestations', className)}
      {...rest}
    >
      Hello prestations
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
