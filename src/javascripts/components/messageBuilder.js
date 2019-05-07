import util from '../helpers/util';
import editBtnListeners from './editComment/editButtonListeners';

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
  editBtnListeners.addEditBtnListeners();
};

export default { messageBuilder };
