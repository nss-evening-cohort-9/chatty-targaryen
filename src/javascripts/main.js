import themesModal from './components/themes-modal/themes-modal';

import addCommentEvents from './components/addComments';
import editButtonListeners from './components/editComment/editButtonListeners';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  addCommentEvents.getData();
  themesModal.initializeThemesModal();
  addCommentEvents.addCommentEvents();
  editButtonListeners.addEditBtnListeners();
};

init();
