import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './menuheader.scss';

function MenuHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header-burger">
      <Button
        alt="Button List"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: '#9C27B0' }}>
          <MenuIcon />
        </Avatar>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <NavLink
          to="/prestations"
          className="search-bar__is-active"
        >
          <MenuItem onClick={handleClose}>Prestations</MenuItem>
        </NavLink>
        <NavLink
          to="/rendezvous"
          className="search-bar__is-active"
        >
          <MenuItem onClick={handleClose}>Prise de Rendez-vous</MenuItem>
        </NavLink>
        <NavLink
          to="/contact"
          className="search-bar__is-active"
        >
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </NavLink>
        <NavLink
          to="/legalnotice"
        >
          <MenuItem onClick={handleClose}>Mentions Légales</MenuItem>
        </NavLink>
        <NavLink
          to="/about"
        >
          <MenuItem onClick={handleClose}>A propos</MenuItem>
        </NavLink>
        <NavLink
          to="/avis"
          className="search-bar__is-active"
        >
          <MenuItem onClick={handleClose}>Avis-Témoignages</MenuItem>
        </NavLink>
        <NavLink
          to="/utilsLinks"
          className="search-bar__is-active"
        >
          <MenuItem onClick={handleClose}>Liens Utiles</MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
}

MenuHeader.propTypes = {
};

export default React.memo(MenuHeader);
