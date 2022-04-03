import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './menuheader.scss';

function MenuHeader({ className, ...rest }) {
  return (
    <div
      className={classnames('menuheader', className)}
      {...rest}
    >
      hello
    </div>
  );
}

MenuHeader.propTypes = {
  className: PropTypes.string,
};
MenuHeader.defaultProps = {
  className: '',
};
export default React.memo(MenuHeader);
