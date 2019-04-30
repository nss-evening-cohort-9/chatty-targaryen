import util from './javascripts/helpers/util';

const buildNavBar = () => {
  let domString = '';
  domString += '<nav id="chatNav" class="navbar navbar-light bg-light">';
  domString += '<a class="navbar-brand">DragonChat</a>';
  domString += '<form class="form-inline">';
  domString += '<input class="form-control mr-sm-2" id="userName" type="text" placeholder="Name" aria-label="Name">';
  domString += '<input class="form-control mr-sm-2" id="userComment" type="text" placeholder="Comment" aria-label="Comment">';
  domString += '<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>';
  domString += '</form>';
  domString += '</nav>';
  util.printToDom('navBar', domString);
};

export default { buildNavBar };
