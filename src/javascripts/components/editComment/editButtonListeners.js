import addComments from '../addComments';
import util from '../../helpers/util';

// This is the same function that is used to load seed data in init function
const messageBuilder = (commentArray) => {
  let domString = '';
  commentArray.forEach((comment) => {
    domString += '<div class="media comment">';
    domString += `<img class="mr-3 align-self-center profilePhoto" src="${comment.imageURL}" alt="profile photo of the user ${comment.username}">`;
    domString += '<div class="media-body">';
    domString += `<h5 class="mt-0">${comment.username}</h5>`;
    domString += `<p class="commentText">${comment.comment}</p>`;
    domString += `<input id="${comment.id}" class="newCommentEntry" placeholder="${comment.comment}">`;
    domString += `<button id="${comment.id}" class="btn btn-primary updateCommentBtn">Update</button>`;
    domString += '</div>';
    domString += `<button id="${comment.id}" class="btn btn-danger deleteButton">Delete</button>`;
    domString += `<button id="${comment.id}" class="btn btn-primary editBtn">Edit</button>`;
    domString += '</div>';
  });
  util.printToDom('container', domString);
};

// This takes the updated comment text and plugs it into the innerHTML of the comment to edit
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
  // NEED TO RE-ATTACH EVENT LISTENERS HERE
  messageBuilder(commentArray);
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
