import moment from 'moment';

import util from '../helpers/util';

import seedData from './seedData';


const commentAvatar = 'https://via.placeholder.com/150';
let commentNum = 1;
let commentCollection = [];
// let seedArrayEmpty = [];

const messageBuilder = (commentArray) => {
  let domString = '';
  commentArray.forEach((comment) => {
    domString += '<li class="media comment">';
    domString += `<img class="mr-3 align-self-center profilePhoto" src="${comment.imageURL}" alt="profile photo of the user ${comment.username}">`;
    domString += '<div class="media-body container">';
    domString += `<h2 class="mt-1">${comment.username}</h2>`;
    domString += `<p class="commentText">${comment.comment}</p>`;
    domString += `<p>${comment.timestamp}</p>`;
    domString += `<button id="${comment.id}" class="btn btn-danger deleteButton">Delete</button>`;
    domString += '</div>';
    domString += '</li>';
  });
  util.printToDom('container', domString);
};

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

export default { addCommentEvents, getData };
