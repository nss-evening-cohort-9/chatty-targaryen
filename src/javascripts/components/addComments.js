import util from '../helpers/util';

import seedData from './seedData';


const commentAvatar = 'https://via.placeholder.com/150';
let commentNum = 1;
let commentCollection = [];
// let seedArrayEmpty = [];

const messageBuilder = (commentArray) => {
  let domString = '';
  commentArray.forEach((comment) => {
    domString += '<div class="media comment">';
    domString += `<img class="mr-3 align-self-center profilePhoto" src="${comment.imageURL}" alt="profile photo of the user ${comment.username}">`;
    domString += '<div class="media-body">';
    domString += `<h5 class="mt-0">${comment.username}</h5>`;
    domString += `<p id="${comment.id}" class="commentText">${comment.comment}</p>`;
    domString += `<input id="${comment.id}" class="newCommentEntry" value="${comment.comment}">`;
    domString += `<button id="${comment.id}" class="btn btn-primary updateCommentBtn">Update</button>`;
    domString += '</div>';
    domString += `<button id="${comment.id}" class="btn btn-danger deleteButton">Delete</button>`;
    domString += `<button id="${comment.id}" class="btn btn-primary editBtn">Edit</button>`;
    domString += '</div>';
  });
  util.printToDom('container', domString);
};

const limitMessages = () => {
  if (commentCollection.length > 20) {
    commentCollection.shift();
  }
};

const addComment = () => {
  const inputName = document.getElementById('userName');
  const inputComment = document.getElementById('userComment');
  const commentName = inputName.value;
  const commentContent = inputComment.value;
  const newComment = {
    id: `comment${commentNum}`,
    username: commentName,
    comment: commentContent,
    imageURL: `${commentAvatar}`,
  };
  commentCollection.push(newComment);
  commentNum += 1;
  limitMessages();
  messageBuilder(commentCollection);
  inputName.value = '';
  inputComment.value = '';
};


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

const returnCommentCollection = () => commentCollection;

export default { addCommentEvents, getData, returnCommentCollection };
