import navbar from '../navbar';
import menubar from '../menubar';
import themesModal from './components/themes-modal/themes-modal';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  navbar.buildNavBar();
  menubar.buildMenuBar();
  themesModal.modalDomStringBuilder();
};

init();
