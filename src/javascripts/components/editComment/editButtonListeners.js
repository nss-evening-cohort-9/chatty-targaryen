import addComments from '../addComments';
import util from '../../helpers/util';

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

const updateCommentText = (targetId) => {
  const newCommentText = document.getElementById('newCommentEntry').value;
  const commentArray = addComments.returnCommentCollection();
  commentArray.forEach((message) => {
    if (message.id === targetId) {
      message.comment = newCommentText;
    }
    return commentArray;
  });
  console.error(commentArray);
  messageBuilder(commentArray);
  document.getElementById('newCommentEntry').style.display = 'none';
  document.getElementById('updateCommentBtn').style.display = 'none';
};

const addUpdateBtnListener = (myId) => {
  document.getElementById('updateCommentBtn').addEventListener('click', () => {
    updateCommentText(myId);
  });
};

const editText = (e) => {
  const buttonId = e.target.id;
  const allCommentTexts = document.getElementsByClassName('commentText');
  // const targetText = allCommentTexts.getElementById(buttonId).innerHTML;
  console.error(allCommentTexts);
  // const targetText = document.getElementById(buttonId).innerHTML;
  // document.getElementById('newCommentEntry').value = targetText;
  // document.getElementById('newCommentEntry').style.display = 'inline';
  // document.getElementById('updateCommentBtn').style.display = 'inline';
  addUpdateBtnListener(buttonId);
};

const addEditBtnListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('editBtn')) {
      editText(e);
    }
  });
};

export default { addEditBtnListeners };
