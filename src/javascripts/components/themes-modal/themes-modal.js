// initialized vars to use throughout module
const radioButtons = Array.from(document.getElementsByClassName('themes-modal-radio'));
let checkedRadioButton;

/* used arrays and forEach to create dynamically changeable lists of elements by className
set lists up to auto-change text-sizing based on state of largeText checkbox
used these methods to allow app to change text-sizing for entire page on Save click
without warping size of pre-enlarged text elements to unmanageable sizes */
const toggleLargeText = () => {
  const lgTextElements = Array.from(document.getElementsByClassName('large-text'));
  const rgTextElements = Array.from(document.getElementsByClassName('regular-text'));
  const appClassList = document.getElementById('app').classList;
  const lgTextCheckbox = document.getElementById('largeText');
  if (lgTextCheckbox.checked) {
    lgTextElements.forEach((element) => {
      element.classList.remove('large-text');
    });
    appClassList.add('large-text');
  } else {
    rgTextElements.forEach((element) => {
      element.classList.add('large-text');
    });
    appClassList.remove('large-text');
  }
};

//on Cancel click, loops over radio buttons and unchecks checked one
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
          console.error('Broken application of color classes on modal');
      }
    }
    return selectedClass;
  });
  toggleLargeText();
  if (selectedClass !== '') {
    changeDivClasses(selectedClass);
  }
};

const modalControlsListeners = () => {
  document.getElementById('saveButton').addEventListener('click', saveButtonClick);
  document.getElementById('cancelButton').addEventListener('click', cancelButtonClick);
};

export default {
  modalControlsListeners,
};
