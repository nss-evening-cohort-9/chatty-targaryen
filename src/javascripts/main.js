import themesModal from './components/themes-modal/themes-modal';
import addCommentEvents from './components/addComments';


import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  themesModal.modalDomStringBuilder();
  addCommentEvents.addCommentEvents();
};

init();
