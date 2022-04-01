import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './header.scss';
import { NavLink } from 'react-router-dom';
import logoAnita from '../../images/1.png';
import HomeIcon from '../../utils/HomeIcon';

function Header({ className, ...rest }) {
  return (
    <div
      className={classnames('header', className)}
      {...rest}
    >
      <div className="header-home">
        <NavLink
          to="/"
        >
          <HomeIcon
            sx={{ fontSize: 40, color: '#C7DC59' }}
          />
        </NavLink>
      </div>
      <div className="header-logo">
        <img
          src={logoAnita}
          alt="logo societe anita chenot"
        />
        ANITA DIETETIQUE
      </div>
      <div className="header-burger" />
      ANITA DIETETIQUE
    </div>

  );
}

Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: '',
};
export default React.memo(Header);
