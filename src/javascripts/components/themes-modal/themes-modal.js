import util from '../../helpers/util';

const radioButtons = Array.from(document.getElementsByClassName('themes-modal-radio'));
let checkedRadioButton;

const toggleLargeText = () => {
  const appClassList = document.getElementById('app').classList;
  const lgTextCheckbox = document.getElementById('largeText');
  if (lgTextCheckbox.checked) {
    appClassList.remove('regular-text');
    appClassList.add('large-text');
  } else {
    appClassList.remove('large-text');
    appClassList.add('regular-text');
  }
};

const cancelButtonClick = () => {
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
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
  toggleLargeText();
};

const modalControlsListeners = () => {
  document.getElementById('saveButton').addEventListener('click', saveButtonClick);
  document.getElementById('cancelButton').addEventListener('click', cancelButtonClick);
};

export default {
  modalControlsListeners,
};
