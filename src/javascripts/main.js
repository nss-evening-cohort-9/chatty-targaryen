import navbar from '../navbar'
import themesModal from './components/themes-modal';
import '../styles/main.scss';

const init = () => {
themesModal.buttonDomStringBuilder();
themesModal.modalDomStringBuilder();
  navbar.buildNavBar();
};

init();