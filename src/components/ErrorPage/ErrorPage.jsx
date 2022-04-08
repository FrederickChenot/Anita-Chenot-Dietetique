import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './errorpage.scss';

const img = [
  {
    Url404: `https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_SERVER}/image/upload/q_51/v1649407114/poule_LI_e1rmtf.jpg`,
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
