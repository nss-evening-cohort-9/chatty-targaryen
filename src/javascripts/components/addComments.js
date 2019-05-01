import util from '../helpers/util';
import attachEventListener from '../helpers/attachEventListener';


const commentAvatar = '';
let commentNum = 1;
const commentCollection = [];

const deleteComment = (e) => {
  const buttonId = e.target.id;
  commentCollection.forEach((comment, index) => {
    if (comment.id === buttonId) {
      commentCollection.splice(index, 1);
    }
  });

  // messageBuilder(commentCollection);
  attachEventListener.addDeleteEvents(deleteComment);
};

const messageBuilder = (commentArray) => {
  let domString = '';
  commentArray.forEach((comment) => {
    domString += '<div class="media comment">';
    domString += `<img class="mr-3 align-self-center" src="${comment.avatar}" alt="Generic placeholder image">`;
    domString += '<div class="media-body">';
    domString += `<h5 class="mt-0">${comment.name}</h5>`;
    domString += `<p class="commentText">${comment.comment}</p>`;
    domString += '</div>';
    domString += `<button id="${comment.id}" class="btn btn-danger deleteButton">Delete</button>`;
    domString += '</div>';
  });
  util.printToDom('container', domString);
  attachEventListener.addDeleteEvents(deleteComment);
};

const addComment = (e) => {
  e.preventDefault();
  const inputName = document.getElementById('userName');
  const inputComment = document.getElementById('userComment');
  const commentName = inputName.value;
  const commentContent = inputComment.value;
  const newComment = {
    name: commentName,
    comment: commentContent,
    avatar: `${commentAvatar}`,
    id: `commentNum${commentNum}`,
  };
  commentCollection.push(newComment);
  commentNum += 1;
  messageBuilder(commentCollection);
  inputName.value = '';
  inputComment.value = '';
};

export default { addComment };
