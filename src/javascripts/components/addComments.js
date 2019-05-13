import moment from 'moment';

import util from '../helpers/util';

import seedData from './seedData';

const commentAvatar = 'https://via.placeholder.com/150';
let commentNum = 1;
let commentCollection = [];

// This builds the comment cards and prints them to the DOM
const messageBuilder = (commentArray) => {
  let domString = '';
  commentArray.forEach((comment) => {
    domString += '<li class="media comment">';
    domString += `<img class="mr-3 align-self-center profilePhoto" src="${comment.imageURL}" alt="profile photo of the user ${comment.username}">`;
<<<<<<< HEAD
    domString += '<div class="media-body container">';
    domString += `<h2 class="mt-1">${comment.username}</h2>`;
    domString += `<p class="commentText">${comment.comment}</p>`;
    domString += `<p>${comment.timestamp}</p>`;
    domString += `<button id="${comment.id}" class="btn btn-danger deleteButton">Delete</button>`;
=======
    domString += '<div class="media-body">';
    domString += `<h5 class="mt-0">${comment.username}</h5>`;
    domString += `<p id="${comment.id}" class="commentText">${comment.comment}</p>`;
    domString += `<input id="${comment.id}" class="newCommentEntry" value="${comment.comment}">`;
    domString += `<button id="${comment.id}" class="btn btn-primary updateCommentBtn">Update</button>`;
    domString += '</div>';
    domString += `<button id="${comment.id}" class="btn btn-danger deleteBtn">Delete</button>`;
    domString += `<button id="${comment.id}" class="btn btn-primary editBtn">Edit</button>`;
>>>>>>> master
    domString += '</div>';
    domString += '</li>';
  });
  util.printToDom('container', domString);
};

// This only shows the most recent 20 comments
const limitMessages = () => {
  if (commentCollection.length > 20) {
    commentCollection.shift();
  }
};

// This adds a comment to the DOM by taking user input and adding new object to commentCollection
const addComment = () => {
  const inputName = document.getElementById('userName');
  const inputComment = document.getElementById('userComment');
  const inputDate = moment().calendar();
  const commentName = inputName.value;
  const commentContent = inputComment.value;
  const newComment = {
    id: `comment${commentNum}`,
    username: commentName,
    comment: commentContent,
    imageURL: `${commentAvatar}`,
    timestamp: inputDate,
  };
  commentCollection.push(newComment);
  commentNum += 1;
  limitMessages();
  messageBuilder(commentCollection);
  inputName.value = '';
  inputComment.value = '';
};

// This takes the updated comment text and plugs it into the innerHTML of the comment to edit
// It then hides the input and update button fields
const updateCommentText = (targetId) => {
  const allUpdateButtons = Array.from(document.getElementsByClassName('updateCommentBtn'));
  const allInputs = Array.from(document.getElementsByClassName('newCommentEntry'));
  let replacementText = '';
  allInputs.forEach((input) => {
    if (input.id === targetId) {
      replacementText = input.value;
    }
  });
  commentCollection.forEach((message) => {
    if (message.id === targetId) {
      message.comment = replacementText;
    }
    return commentCollection;
  });
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
  messageBuilder(commentCollection);
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

// This removes a comment from commentCollection and reprints commentCollection to the DOM
const deleteComment = (e) => {
  commentCollection.forEach((comment) => {
    if (comment.id === e.target.id) {
      const index = commentCollection.indexOf(comment);
      commentCollection.splice(index, 1);
      messageBuilder(commentCollection);
    }
  });
};

// This clears all messages from the DOM
const clearComments = () => {
  commentCollection = [];
  messageBuilder(commentCollection);
};

// This adds listeners to the 'edit' and 'delete' buttons on cards as well as the 'clear' button
const addEditBtnListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('editBtn')) {
      editText(e);
    }
    if (e.target.id === 'clearBtn') {
      clearComments();
    }
    if (e.target.classList.contains('deleteBtn')) {
      deleteComment(e);
    }
  });
};

// This listens for the user to press enter or click after entering a comment and prints it
const addCommentEvents = () => {
  const addCommentBtn = document.getElementById('addCommentBtn');
  const userComment = document.getElementById('userComment');
  const userName = document.getElementById('userName');
  addCommentBtn.addEventListener('click', addComment);
  userComment.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      addComment();
    }
  });
  userName.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      addComment();
    }
  });
};

// This takes the seed data and prints it as comments
const getData = () => {
  seedData.getSeedData()
    .then((response) => {
      const seedArray = response.data;
      commentCollection = seedArray.messages;
      messageBuilder(commentCollection);
    })
    .catch(() => {
      console.error('ERROR seedData.json not loaded');
    });
};

export default { addCommentEvents, getData, addEditBtnListeners };
