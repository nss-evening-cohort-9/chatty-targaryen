import util from './javascripts/helpers/util';

const buildMenuBar = () => {
  let domString = '';
  domString += '<div id="menuBar">';
  domString += '<button class="btn btn-danger">Clear Messages</button>';
  domString += '</div>';
  util.printToDom('menuBar', domString);
};

export default { buildMenuBar };
