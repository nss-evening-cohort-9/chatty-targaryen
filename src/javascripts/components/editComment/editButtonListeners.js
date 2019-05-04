// const updateCommentText = (targetId) => {
//   // console.error(commentArray);
//   document.getElementById(targetId).innerHTML = document.getElementById('newCommentEntry').value;
//   document.getElementById('newCommentEntry').style.display = 'none';
//   document.getElementById('updateCommentBtn').style.display = 'none';
//   // addComments.messageBuilder();
// };

// const addUpdateBtnListener = (myId) => {
//   document.getElementById('updateCommentBtn').addEventListener('click', () => {
//     updateCommentText(myId);
//   });
// };

const editText = (e) => {
  const buttonId = e.target.id;
  console.error(buttonId);
  // const targetText = document.getElementById(buttonId).innerHTML;
  // document.getElementById('newCommentEntry').value = targetText;
  // document.getElementById('newCommentEntry').style.display = 'inline';
  // document.getElementById('updateCommentBtn').style.display = 'inline';
  // addUpdateBtnListener(buttonId);
};

const addEditBtnListeners = () => {
  const editButtons = document.getElementsByClassName('editBtn');
  for (let i = 0; i < editButtons.length; i += 1) {
    editButtons[i].addEventListener('click', editText);
  }
};

export default { addEditBtnListeners };
