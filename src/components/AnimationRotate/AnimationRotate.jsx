import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './animationrotate.scss';
import About from '../About/About';

function AnimationRotate({ className, ...rest }) {
  return (
    <div
      className={classnames('animationrotate', className)}
      {...rest}
    >
      <figure className="icon-cards mt-3">
        <div className="icon-cards__content">
          <div className="icon-cards__item " />
          <div className="icon-cards__item " />
          <div className="icon-cards__item " />
        </div>
      </figure>
      <About />

    </div>
  );
}

AnimationRotate.propTypes = {
  className: PropTypes.string,
};
AnimationRotate.defaultProps = {
  className: '',
};
export default React.memo(AnimationRotate);
