import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './loader.scss';

function Loader({ className, ...rest }) {
  console.log('hello');
  return (
    <div
      className={classnames('loader', className)}
      {...rest}
    >
      <div className="l_main">
        <div className="l_square"><span /><span /><span /></div>
        <div className="l_square"><span /><span /><span /></div>
        <div className="l_square"><span /><span /><span /></div>
        <div className="l_square"><span /><span /><span /></div>
      </div>
    </div>
  );
}

Loader.propTypes = {
  className: PropTypes.string,
};
Loader.defaultProps = {
  className: '',
};
export default React.memo(Loader);
