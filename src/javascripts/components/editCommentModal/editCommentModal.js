import util from '../../helpers/util';

const editText = () => {
  let newText = document.getElementById('newText').innerHTML;
  // console.error(newText);
  document.getElementById('comment1').getElementsByTagName('h2').innerHTML = newText;
  newText = '';
};

const addModal = () => {
  let domString = '';
  domString += '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">';
  domString += '<div class="modal-dialog modal-dialog-centered" role="document">';
  domString += '<div class="modal-content">';
  domString += '<div class="modal-header">';
  domString += '<h5 class="modal-title" id="exampleModalLongTitle">Edit Comment</h5>';
  domString += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
  domString += '<span aria-hidden="true">&times;</span>';
  domString += '</button>';
  domString += '</div>';
  domString += '<div class="modal-body">';
  domString += '<input type="text" id="newText" placeholder="fartface">';
  domString += '</div>';
  domString += '<div class="modal-footer">';
  domString += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
  domString += '<button type="button" id="saveChange" data-dismiss="modal" class="btn btn-primary">Save changes</button>';
  domString += '</div></div></div></div>';
  util.printToDom('container', domString);
  document.getElementById('comment1').addEventListener('click', editText);
  document.getElementById('saveChange').addEventListener('click', editText);
};

export default { addModal };
