import util from './javascripts/helpers/util';

const buildNavBar = () => {
  let domString = '';
  domString += '<nav id="chatNav" class="navbar navbar-light bg-light justify-content-between">';
  domString += '<a class="navbar-brand">Navbar</a>';
  domString += '<form class="form-inline">';
  domString += '<input class="form-control mr-sm-2" id="userName" type="text" placeholder="Name" aria-label="Name">';
  domString += '<input class="form-control mr-sm-2" id="userComment" type="text" placeholder="Comment" aria-label="Comment">';
  domString += '<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>';
  domString += '</form>';
  domString += '<button class="btn btn-outline-danger" id="clearBtn">Clear comments</button>';
  domString += '</nav>';
  util.printToDom('navBar', domString);
};

export default { buildNavBar };
