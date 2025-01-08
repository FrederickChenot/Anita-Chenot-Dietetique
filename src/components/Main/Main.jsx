import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './main.scss';
import carouselImg from '../../data/carousel-img';

const titles = [
  { id: 1, text: 'Rééquilibrez votre alimentation', color: '#0076D3' },
  { id: 2, text: 'Des conseils adaptés à vos besoins', color: '#C28B00' },
  { id: 3, text: 'Un accompagnement personnalisé', color: '#9C27B0' },
  { id: 4, text: 'Pour une vie plus saine', color: '#463A35' },
];

function Main({ className, ...rest }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Changer le titre toutes les 3 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, []);

  return (
    <div className={classnames('main', className)} {...rest}>
      <div className="main-introduction">Votre Diététique Personnalisée</div>
      <h1 className="main-title-photo" style={{ color: titles[currentTitleIndex].color }}>
        {titles[currentTitleIndex].text}
      </h1>
      <div className="dots-container">
        {titles.map((title) => (
          <span
            key={title.id} // Utilisation de l'ID unique comme clé
            className={`dot ${currentTitleIndex === title.id - 1 ? 'active' : ''}`}
            style={{ backgroundColor: currentTitleIndex === title.id - 1 ? title.color : '#ddd' }}
          />
        ))}
      </div>
      <div className="main-photo">
        {carouselImg.slice(0, 5).map((image, index) => (
          <div key={image.Title} className={`image-container image-${index + 1}`}>
            <img src={image.UrlImg} alt={image.Title} className="main-photo-img" />
          </div>
        ))}
      </div>
      {/* Ajout du bouton lien en bas de la page */}
      <div className="main-button">
        <a href="/prestations" className="btn">Voir les prestations</a>
      </div>

    </div>
  );
}

Main.propTypes = {
  className: PropTypes.string,
};

Main.defaultProps = {
  className: '',
};

export default React.memo(Main);
