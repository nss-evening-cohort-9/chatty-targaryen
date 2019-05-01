import util from './javascripts/helpers/util';

const buildMenuBar = () => {
 let domString = '';
 domString += '<button id="clearBtn" class="btn btn-danger">Clear Messages</button>';
 domString += '<button type="button" class="btn btn-primary modal-button" id="changeThemesButton" data-toggle="modal" data-target="#changeThemesModal">';
 domString += 'Change Themes';
 domString += '</button>';
 util.printToDom('menuBar', domString);
};

export default { buildMenuBar };