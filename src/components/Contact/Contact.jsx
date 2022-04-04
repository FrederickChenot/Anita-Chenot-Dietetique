import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contact.scss';

function Contact({ className, ...rest }) {
  console.log('hello');
  return (
    <div
      className={classnames('contact', className)}
      {...rest}
    >
      Hello contact
    </div>
  );
}

Contact.propTypes = {
  className: PropTypes.string,
};
Contact.defaultProps = {
  className: '',
};
export default React.memo(Contact);
