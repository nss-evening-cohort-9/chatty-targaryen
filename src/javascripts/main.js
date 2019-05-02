import themesModal from './components/themes-modal/themes-modal';

import addCommentEvents from './components/addComments';


import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  addCommentEvents.getData();
  themesModal.initializeThemesModal();
  // themesModal.testClassList();
  addCommentEvents.addCommentEvents();
};

init();
