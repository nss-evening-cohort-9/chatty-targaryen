import themesModal from './components/themes-modal/themes-modal';

import addCommentEvents from './components/addComments';
import editButtonListeners from './components/editComment/editButtonListeners';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  themesModal.modalControlsListeners();
  addCommentEvents.getData();
  addCommentEvents.addCommentEvents();
  editButtonListeners.addEditBtnListeners();
};

init();
