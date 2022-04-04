import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './avis.scss';

function Avis({ className, ...rest }) {
  console.log('hello');
  return (
    <div
      className={classnames('avis', className)}
      {...rest}
    >
      Hello avis
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
