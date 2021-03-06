import * as React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './contact.scss';
import daisy from '../../images/daisy.jpg';
import appleTree from '../../images/appleTree.jpg';
import appleTree2 from '../../images/appleTree2.jpg';
import cupOfTea from '../../images/cupOfTea.jpg';

const images = [
  {
    url: daisy,
    title: 'Téléphone',
    width: '33%',
    link: 'tel:0606452788',
  },
  {
    url: appleTree,
    title: 'Mail',
    width: '33%',
    link: 'mailto:anitachenot@free.fr',
  },
  {
    url: appleTree2,
    title: 'Linkedin',
    width: '33%',
    link: 'http://www.linkedin.com/in/chenot-anita-bb926b115',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function Contact({ className, ...rest }) {
  return (
    <div
      className={classnames('contact', className)}
      {...rest}
    >
      <Card className="contact-card">
        <CardMedia
          component="img"
          alt="cup of tea"
          height="140"
          image={cupOfTea}

        />
        <CardContent>
          <Typography className="contact-title" gutterBottom variant="h5" component="div">
            Contactez-moi
          </Typography>
          <Box
            className="contact-box"
            sx={{
              display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',
            }}
          >
            {images.map((image) => (
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: image.width,
                }}
              >
                <ImageSrc style={{
                  backgroundImage: `url(${image.url}) `,
                }}
                />

                <ImageBackdrop className="MuiImageBackdrop-root contact-img" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    <a href={image.link} target="_blank" rel="noreferrer">
                      <Chip
                        label={image.title}
                        clickable
                        sx={{
                          color: 'white',
                          fontSize: '1em',

                        }}
                      />
                    </a>

                    <ImageMarked
                      className="MuiImageMarked-root"
                    />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Box>
        </CardContent>
      </Card>
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
