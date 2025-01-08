import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../../styles/index.scss';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import ErrorPage from '../ErrorPage/ErrorPage';
import Prestations from '../Prestations/Prestations';
import PriseDeRendezVous from '../PriseDeRendezVous/PriseDeRendezVous';
import LegalNotice from '../LegalNotice/LegalNotice';
import About from '../About/About';
import Avis from '../Avis/Avis';
// import Loader from '../Loader/Loader';
import UtilsLinks from '../UtilsLinks/UtilsLinks';
import Connexion from '../Connexion/Connexion';
// import Carousel from '../Carousel/carousel';
import AnimationRotate from '../AnimationRotate/AnimationRotate';
import { requestCheck, requestLogin } from '../../requests/login';
import { getLocalBearerToken, removeBearerToken, setBearerToken } from '../../requests';
import { requestPrestations } from '../../requests/prestations';

function App() {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  // const [loader, setLoader] = useState(true);
  const [prestations, setPrestations] = useState([]); // État pour les prestations
  const navigate = useNavigate();

  const handleLoginSubmit = async (email, password) => {
    setLoginErrorMessage('');
    // setLoader(true);
    const response = await requestLogin(email, password);
    if (response.status === 200) {
      setBearerToken(response.data.accessToken);
      setUserId(response.data.id);
      setUserName(response.data.user);
      setIsLogged(true);
      navigate('/');
    }
    else {
      setLoginErrorMessage(response.data);
    }
    // setLoader(false);
  };

  const handleLogoutSubmit = () => {
    removeBearerToken();
    setIsLogged(false);
    navigate('/');
  };
  const handleLoginMistake = (response) => {
    if (response === 'try') {
      setLoginErrorMessage('');
      navigate('/connexion');
    }
    if (response === 'forget') {
      setLoginErrorMessage('');
      navigate('/');
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      const localToken = getLocalBearerToken();

      // Vérification du token local
      if (localToken) {
        // setLoader(true);
        const response = await requestCheck(localToken);
        if (response.status === 200) {
          setUserId(response.data.userId);
          setUserName(response.data.userName);
          setIsLogged(true);
          setBearerToken(response.data.accessToken);
        }
        else {
          removeBearerToken();
        }
      }

      // Charger les prestations au démarrage de l'application
      try {
        const response = await requestPrestations(); // Utilisation de la fonction requestPrestations existante
        if (response.status === 200) {
          setPrestations(response.data); // Mettre à jour l'état avec les données reçues
          console.log(response.data);
        }
        else {
          console.error('Erreur lors du chargement des prestations');
        }
      }
      catch (error) {
        console.error('Erreur lors de la requête pour les prestations :', error);
      }

      // setLoader(false); // Désactiver le loader une fois les données chargées
    };

    loadInitialData();
  }, []);

  return (
    <div className="App">
      <Header
        isLogged={isLogged}
        onLogoutSubmit={handleLogoutSubmit}
        isUserId={userId}
        userName={userName}
        // loader={loader}
      />
      <Routes>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/" element={<AnimationRotate />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/prestations"
          element={(
            <Prestations
              isLogged={isLogged}
              // loader={Loader}
              prestations={prestations}
            />
)}
        />
        <Route path="/rendezvous" element={<PriseDeRendezVous />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legalnotice" element={<LegalNotice />} />
        <Route path="/about" element={<About />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/utilsLinks" element={<UtilsLinks />} />
        <Route
          path="/connexion"
          element={(
            <Connexion
              onLoginSubmit={handleLoginSubmit}
              errorMessage={loginErrorMessage}
              onHandleLoginMistake={handleLoginMistake}
            />
)}
        />
      </Routes>
      {/* {loader && (
        <Loader />
      )} */}
    </div>
  );
}

export default App;
