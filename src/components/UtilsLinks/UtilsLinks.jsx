import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './utilslinks.scss';

function UtilsLinks({ className, ...rest }) {
  return (
    <div
      className={classnames('utilslinks', className)}
      {...rest}
    >
      Hello liens utiles
    </div>
  );
}

UtilsLinks.propTypes = {
  className: PropTypes.string,
};
UtilsLinks.defaultProps = {
  className: '',
};
export default React.memo(UtilsLinks);
