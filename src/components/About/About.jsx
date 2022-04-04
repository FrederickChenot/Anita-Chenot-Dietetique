import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './about.scss';

function About({ className, ...rest }) {
  console.log('hello');
  return (
    <div
      className={classnames('about', className)}
      {...rest}
    >
      Hello about
    </div>
  );
}

About.propTypes = {
  className: PropTypes.string,
};
About.defaultProps = {
  className: '',
};
export default React.memo(About);
