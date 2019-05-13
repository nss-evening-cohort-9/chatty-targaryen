/* module creates functionality for modal controls found in index.html
Toggles large text with state of checkbox on save
Changes className to modify color themes
Based on which radio button, if any, is checked on save
Attaches event listeners
exports listener attaching function to main.js for initialization of functionality on page load */

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

// on Cancel click, loops over radio buttons and unchecks checked one
const cancelButtonClick = () => {
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked) {
      checkedRadioButton = radioButton;
    }
  });
  checkedRadioButton.checked = false;
};

/* separately initialized original classList and array version for distinct uses
looped over array to test if className is the one to change
if so, removed starting className first and added second
order is important because adding first can lead to className being completely erased
if user clicks same theme twice in a row */
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

/* used switch as simple conditional to test for id of checked radio button
to assign different className to variable selectedClass for each button
 and pass that variable into changeDivClasses function
 had to test to make sure selectedClass was not an empty string,
 to ensure user would not have delayed response if only large text is clicked */
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

// relatively straightforward addition of event listeners to save and cancel buttons
const modalControlsListeners = () => {
  document.getElementById('saveButton').addEventListener('click', saveButtonClick);
  document.getElementById('cancelButton').addEventListener('click', cancelButtonClick);
};

export default {
  modalControlsListeners,
};
