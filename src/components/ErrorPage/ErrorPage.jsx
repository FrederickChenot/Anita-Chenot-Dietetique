import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './errorpage.scss';
import error404 from '../../images/error404.jpg';

const img = [
  {
    Url404: error404,
    Name: 'erreur 404',
  },
];

function ErrorPage({ className, ...rest }) {
  return (
    <div
      className={classnames('errorpage', className)}
      {...rest}
    >
      <Card className="errorpage-card" sx={{ maxWidth: 800 }}>
        <CardMedia
          component="img"
          image={img[0].Url404}
          alt={img[0].Name}
        />
      </Card>
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
