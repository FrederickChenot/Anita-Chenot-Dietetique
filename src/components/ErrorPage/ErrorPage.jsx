import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './errorpage.scss';

function ErrorPage({ className, ...rest }) {
  console.log('hello');
  return (
    <div
      className={classnames('errorpage', className)}
      {...rest}
    >
      Hello error page
    </div>
  );
}

ErrorPage.propTypes = {
  className: PropTypes.string,
};
ErrorPage.defaultProps = {
  className: '',
};
export default React.memo(ErrorPage);
