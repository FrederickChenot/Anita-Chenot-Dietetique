import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './legalnotice.scss';

function LegalNotice({ className, ...rest }) {
  console.log('hello');
  return (
    <div
      className={classnames('legalnotice', className)}
      {...rest}
    >
      Hello mentions legales
    </div>
  );
}

LegalNotice.propTypes = {
  className: PropTypes.string,
};
LegalNotice.defaultProps = {
  className: '',
};
export default React.memo(LegalNotice);
