import navbar from '../navbar';
import menubar from '../menubar';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  navbar.buildNavBar();
  menubar.buildMenuBar();
};

init();
