import addComments from '../addComments';

const updateCommentText = (targetId) => {
  const commentArray = addComments.returnCommentCollection();
  // console.error(commentArray);
  // console.error(targetId);
  commentArray.forEach((comment) => {
    if (comment.id === targetId) {
      console.error(comment.comment);
      // comment.comment = document.getElementById('newCommentEntry').value;
    }
  });
  document.getElementById('newCommentEntry').style.display = 'none';
  document.getElementById('updateCommentBtn').style.display = 'none';
  addComments.messageBuilder(commentArray);
};

const addUpdateBtnListener = (myId) => {
  document.getElementById('updateCommentBtn').addEventListener('click', () => {
    updateCommentText(myId);
  });
};

const editText = (e) => {
  const buttonId = e.target.id;
  console.error(buttonId);
  const targetText = document.getElementById(buttonId).innerHTML;
  document.getElementById('newCommentEntry').value = targetText;
  document.getElementById('newCommentEntry').style.display = 'inline';
  document.getElementById('updateCommentBtn').style.display = 'inline';
  addUpdateBtnListener(buttonId);
};

const addEditBtnListeners = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('editBtn')) {
      editText(e);
    }
  });
};

export default { addEditBtnListeners };
