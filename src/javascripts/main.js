import themesModal from './components/themes-modal/themes-modal';

import addCommentEvents from './components/addComments';
import editComments from './components/editCommentModal/editCommentModal';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  themesModal.initializeThemesModal();
  // themesModal.testClassList();
  addCommentEvents.addCommentEvents();
  editComments.addModal();
};

init();
