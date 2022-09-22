import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './header.scss';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../../utils/HomeIcon';
import MenuHeader from '../MenuHeader/MenuHeader';
import logoSite from '../../images/logoSite.png';

const img = [
  {
    UrlLogo: logoSite,
    Name: 'Zen',
  },
];

function Header({
  className,
  isLogged,
  onLogoutSubmit,
  isUserId,
  userName,
  ...rest
}) {
  return (
    <div
      className={classnames('header', className)}
      {...rest}
    >
      <div className="header-home">
        <NavLink
          to="/"
          alt="Home page"
        >
          <HomeIcon
            className="icon-home"
            alt="Icon home"
            sx={{ fontSize: 40, color: '#9C27B0' }}
          />
        </NavLink>
      </div>
      <div className="header-logo">
        <img
          className="header-logo__img"
          sx={{ fontSize: 40 }}
          src={img[0].UrlLogo}
          alt="Icon logo"
        />
        <div className="header-logo__name">
          ANITA DIETETIQUE
          {isLogged && (<p className="header-top__message">BIENVENUE, { userName } !</p>)}

        </div>
      </div>
      <MenuHeader
        isLogged={isLogged}
        onLogoutSubmit={onLogoutSubmit}
      />
    </div>

  );
}

Header.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool.isRequired,
  onLogoutSubmit: PropTypes.func.isRequired,
  isUserId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
Header.defaultProps = {
  className: '',
};
export default React.memo(Header);
