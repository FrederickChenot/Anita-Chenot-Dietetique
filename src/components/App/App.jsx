import { Route, Routes } from 'react-router-dom';
import '../../styles/index.scss';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import ErrorPage from '../ErrorPage/ErrorPage';
import Prestations from '../Prestations/Prestations';
import PriseDeRendezVous from '../PriseDeRendezVous/PriseDeRendezVous';
import LegalNotice from '../LegalNotice/LegalNotice';
import About from '../About/About';
import Avis from '../Avis/Avis';
import UtilsLinks from '../UtilsLinks/UtilsLinks';
// import Carousel from '../Carousel/carousel';
import AnimationRotate from '../AnimationRotate/AnimationRotate';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/error/" element={<ErrorPage />} />
        <Route path="/" element={<AnimationRotate />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/prestations/" element={<Prestations />} />
        <Route path="/rendezvous/" element={<PriseDeRendezVous />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/legalnotice/" element={<LegalNotice />} />
        <Route path="/about/" element={<About />} />
        <Route path="/avis/" element={<Avis />} />
        <Route path="/utilsLinks/" element={<UtilsLinks />} />
      </Routes>
    </div>
  );
}

export default App;
