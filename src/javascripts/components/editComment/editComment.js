// import util from '../../helpers/util';

const updateCommentText = (targetId) => {
  console.error(targetId);
  // document.getElementById(targetId).innerHTML = document.getElementById('newCommentEntry').value;
  // document.getElementById('newCommentEntry').style.display = 'none';
  // document.getElementById('updateCommentBtn').style.display = 'none';
};

const addUpdateBtnListener = (myId) => {
  document.getElementById('updateCommentBtn').addEventListener('click', updateCommentText(myId));
};

const editText = (e) => {
  const buttonId = e.target.id;
  const targetText = document.getElementById(buttonId).innerHTML;
  document.getElementById('newCommentEntry').value = targetText;
  document.getElementById('newCommentEntry').style.display = 'inline';
  document.getElementById('updateCommentBtn').style.display = 'inline';
  addUpdateBtnListener(buttonId);
};

// This adds event listeners to all of the edit buttons that are on the page
const addEditBtnListeners = () => {
  const editButtons = document.getElementsByClassName('editBtn');
  for (let i = 0; i < editButtons.length; i += 1) {
    editButtons[i].addEventListener('click', editText);
  }
};

export default { addEditBtnListeners };
