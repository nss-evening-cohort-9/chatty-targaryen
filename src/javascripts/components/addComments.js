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
    domString += `<img class="mr-3 align-self-center" src="${comment.imageURL}" alt="Generic placeholder image">`;
    domString += '<div class="media-body">';
    domString += `<h5 class="mt-0">${comment.username}</h5>`;
    domString += `<p class="commentText">${comment.comment}</p>`;
    domString += '</div>';
    domString += `<button id="${comment.id}" class="btn btn-danger deleteButton">Delete</button>`;
    domString += '</div>';
  });
  util.printToDom('container', domString);
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
      console.error(commentCollection);
      commentCollection = seedArray.messages;
      messageBuilder(commentCollection);
    })
    .catch(() => {
      console.error('fuck');
    });
};

export default { addCommentEvents, getData };
