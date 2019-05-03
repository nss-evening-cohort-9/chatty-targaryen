import util from '../../helpers/util';

let radioButtons = [];
let checkedRadioButton;
const modalDomStringBuilder = () => {
  let domString = '';

  domString += '<div class="modal fade change-themes-modal" id="changeThemesModal" tabindex="-1" role="dialog" aria-labelledby="changeThemesLabel" aria-hidden="true">';
  domString += '<div class="modal-dialog" role="document">';
  domString += '<div class="modal-content">';
  domString += '<div class="modal-header">';
  domString += '<h5 class="modal-title w-100 text-center" id="changeThemesLabel">Change Your Theme</h5>';
  domString += '<button type="button" class="close modal-control-button" id="closeButton" data-dismiss="modal" aria-label="Close">';
  domString += '<span aria-hidden="true">&times;</span>';
  domString += '</button>';
  domString += '</div>';

  domString += '<div class="modal-body">';
  domString += '<div class="container-fluid">';
  domString += '<div class="row">';
  domString += '<div class="col-12">';
  domString += '<p>Customize your dragon\'s chat experience with one of our gorgeous color schemes!</p>';
  domString += '</div>';
  domString += '<form class="col-12">';
  domString += '<div class="form-row">';

  domString += '<div class="form-group col-sm-12 col-md-6 col-lg-3">';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input themes-modal-radio" type="radio" name="themesRadios" id="fireRadio" value="fire">';
  domString += '<label class="form-check-label themes-radio-label" for="fireRadio">';
  domString += 'Fire Theme';
  domString += '</label>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-sm-12 col-md-6 col-lg-9">';
  domString += '<p class="text-left">Description of fire theme</p>';
  domString += '</div>';

  domString += '<div class="form-group col-sm-12 col-md-6 col-lg-3">';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input themes-modal-radio" type="radio" name="themesRadios" id="iceRadio" value="ice">';
  domString += '<label class="form-check-label themes-radio-label" for="iceRadio">';
  domString += 'Ice Theme';
  domString += '</label>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-sm-12 col-md-6 col-lg-9">';
  domString += '<p class="text-left">Description of ice  theme</p>';
  domString += '</div>';

  domString += '<div class="form-group col-sm-12 col-md-6 col-lg-3">';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input themes-modal-radio" type="radio" name="themesRadios" id="stoneRadio" value="stone">';
  domString += '<label class="form-check-label themes-radio-label" for="stoneRadio">';
  domString += 'Stone Theme';
  domString += '</label>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-sm-12 col-md-6 col-lg-9">';
  domString += '<p class="text-left">Description of stone theme</p>';
  domString += '</div>';

  domString += '<div class="form-group col-sm-12 col-md-6 col-lg-3">';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input themes-modal-radio" type="radio" name="themesRadios" id="originalRadio" value="original">';
  domString += '<label class="form-check-label themes-radio-label" for="originalRadio">';
  domString += 'Reset to Original';
  domString += '</label>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-sm-12 col-md-6 col-lg-9">';
  domString += '<p class="text-left">Description of original theme</p>';
  domString += '</div>';

  domString += '</div>';

  domString += '<div class="form-row">';

  domString += '<div class="col-12">';
  domString += '<h6 class="w-100 text-center">Enlarge Text</h6>';
  domString += '</div>';

  domString += '<div class="form-group col-sm-12 col-md-6 col-lg-3">';
  domString += '<div class="form-check">';
  domString += '<input class="form-check-input themes-modal-checkbox" type="checkbox" value="largeText" id="largeText">';
  domString += '<label class="form-check-label" for="largeText">';
  domString += 'Enlarge Text';
  domString += '</label>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="col-sm-12 col-md-6 col-lg-9">';
  domString += '<p class="text-left">Double your font size</p>';
  domString += '</div>';

  domString += '</div>';
  domString += '</form>';

  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  domString += '<div class="modal-footer">';
  domString += '<button type="button" class="btn btn-secondary modal-control-button" id="cancelButton" data-dismiss="modal">Cancel</button>';
  domString += '<button type="button" class="btn btn-primary modal-control-button" id="saveButton">Save changes</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';

  util.printToDom('modalDiv', domString);
  radioButtons = Array.from(document.getElementsByClassName('themes-modal-radio'));
};

const checkLargeText = () => {
  const appClassList = document.getElementById('app').classList;
  const lgTextCheckbox = document.getElementById('largeText');
  if (lgTextCheckbox.checked) {
    appClassList.remove('regular-text');
    appClassList.add('large.text');
  } else {
    appClassList.remove('large-text');
    appClassList.add('regular-text');
  }
};

const cancelButtonClick = () => {
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      console.error(radioButton.id);
      checkedRadioButton = radioButton;
    }
  });
  checkedRadioButton.checked = false;
};

const changeDivClasses = (classToSub) => {
  const designatedClassList = document.getElementById('container').classList;
  const ClassListArray = Array.from(designatedClassList);
  ClassListArray.forEach((className) => {
    if (className.includes('color-class')) {
      designatedClassList.remove(className);
      designatedClassList.add(classToSub);
      util.printToDom('testModalDiv', classToSub);
    }
  });
};

const saveButtonClick = () => {
  let selectedClass = '';

  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      switch (radioButton.id) {
        case 'fireRadio':
          selectedClass = 'fire-color-class';
          break;

        case 'iceRadio':
          selectedClass = 'ice-color-class';
          break;

        case 'stoneRadio':
          selectedClass = 'stone-color-class';
          break;

        case 'originalRadio':
          selectedClass = 'original-color-class';
          break;

        default:
      }
    }
    return selectedClass;
  });
  changeDivClasses(selectedClass);
  checkLargeText();
};

const modalControlsListeners = () => {
  document.getElementById('saveButton').addEventListener('click', saveButtonClick);
  document.getElementById('cancelButton').addEventListener('click', cancelButtonClick);
};

const initializeThemesModal = () => {
  modalDomStringBuilder();
  modalControlsListeners();
};


// const testClassList = () => {
//   const testList = Array.from(document.getElementById('modalDiv').classList);
//   testList.forEach((classItem) => {
//     if (classItem.includes('color-class')) {
//       util.printToDom('testModalDiv', classItem);
//     }
//   });
// };

export default {
  initializeThemesModal,
};
