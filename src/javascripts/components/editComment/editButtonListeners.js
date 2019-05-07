import addComments from '../addComments';
import messageBuilder from '../messageBuilder';

// This takes the updated comment text and plugs it into the innerHTML of the comment to edit
// It then hides the input and update button fields
const updateCommentText = (targetId) => {
  const allUpdateButtons = Array.from(document.getElementsByClassName('updateCommentBtn'));
  const allInputs = Array.from(document.getElementsByClassName('newCommentEntry'));
  let replacementText = '';
  allInputs.forEach((input) => {
    if (input.id === targetId) {
      replacementText = input.value;
      console.error(replacementText);
    }
  });
  const commentArray = addComments.returnCommentCollection();
  commentArray.forEach((message) => {
    if (message.id === targetId) {
      message.comment = replacementText;
    }
    return commentArray;
  });
  console.error(commentArray);
  allInputs.forEach((input) => {
    if (input.id === targetId) {
      console.error(input.id, targetId);
      input.style.display = 'none';
    }
  });
  allUpdateButtons.forEach((button) => {
    if (button.id === targetId) {
      button.style.display = 'none';
    }
  });
  messageBuilder.messageBuilder(commentArray);
};

// This adds a listener to the update button on the comment card that will run updateCommentText
const addUpdateBtnListener = (myId) => {
  const allUpdateButtons = Array.from(document.getElementsByClassName('updateCommentBtn'));
  allUpdateButtons.forEach((button) => {
    button.addEventListener('click', () => {
      updateCommentText(myId);
    });
  });
};

// This runs when any edit button is clicked. Causes an input field and update button to appear.
// It also adds a listener to the update button
const editText = (e) => {
  const allCommentTexts = Array.from(document.getElementsByClassName('commentText'));
  const allUpdateButtons = Array.from(document.getElementsByClassName('updateCommentBtn'));
  const allInputs = Array.from(document.getElementsByClassName('newCommentEntry'));
  const buttonId = e.target.id;
  allCommentTexts.forEach((comment) => {
    if (comment.id === buttonId) {
      console.error(comment.id);
      allInputs.forEach((input) => {
        if (input.id === buttonId) {
          input.style.display = 'inline';
        }
      });
      allUpdateButtons.forEach((button) => {
        if (button.id === buttonId) {
          button.style.display = 'inline';
        }
      });
    }
  });
  addUpdateBtnListener(buttonId);
};

// This adds listeners to all of the edit buttons on cards
const addEditBtnListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('editBtn')) {
      editText(e);
    }
  });
};

export default { addEditBtnListeners };
