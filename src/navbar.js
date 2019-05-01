import util from './javascripts/helpers/util';

const buildNavBar = () => {
  let domString = '';
  domString += '<nav id="chatNav" class="navbar navbar-light bg-light">';
  domString += '<a class="navbar-brand">DragonChat</a>';
  domString += '<form id="commentForm">';
  domString += '<div class="form-group">';
  domString += '<label for="exampleInputName">Name</label>';
  domString += '<input type="text" class="form-control" id="userName" aria-describedby="nameHelp" placeholder="Enter name">';
  domString += '</div>';
  domString += '<div class="form-group">';
  domString += '<label for="exampleInputComment">Comment</label>';
  domString += '<input type="text" class="form-control" id="userComment" placeholder="Comment">';
  domString += '</div>';
  domString += '</form>';
  domString += '<button id="addCommentBtn" class="btn btn-primary">Submit</button>';
  domString += '</nav>';
  util.printToDom('navBar', domString);
};

export default { buildNavBar };
