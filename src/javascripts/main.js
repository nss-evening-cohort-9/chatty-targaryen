import themesModal from './components/themes-modal/themes-modal';

import addCommentEvents from './components/addComments';
// import editComment from './components/editComment/editComment';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  themesModal.initializeThemesModal();
  // themesModal.testClassList();
  addCommentEvents.addCommentEvents();
  // editComment.updateCommentListener();
};

init();
