import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './prestationModify.scss';

function PrestationModify({ className, ...rest }) {
  console.log('hello');
  return (
    <div
      className={classnames('prestationModify', className)}
      {...rest}
    >
      Hello
    </div>
  );
}

PrestationModify.propTypes = {
  className: PropTypes.string,
};
PrestationModify.defaultProps = {
  className: '',
};
export default React.memo(PrestationModify);
