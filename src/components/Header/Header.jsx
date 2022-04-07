import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './header.scss';
import { NavLink } from 'react-router-dom';
import logoAnita from '../../images/logo-site.png';
import HomeIcon from '../../utils/HomeIcon';
import MenuHeader from '../MenuHeader/MenuHeader';

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
            sx={{ fontSize: 40, color: '#9C27B0' }}
          />
        </NavLink>
      </div>
      <div className="header-logo">
        <img
          className="header-logo__img"
          sx={{ fontSize: 40 }}
          src={logoAnita}
          alt="logo societe anita chenot"
        />
        <div className="header-logo__name">
          ANITA DIETETIQUE

        </div>
      </div>
      <MenuHeader />
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
