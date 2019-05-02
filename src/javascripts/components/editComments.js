// const commentArray = [];

// const editComment = (e) => {
//   console.error(e.target.id);
//   const buttonId = e.target.id;
//   commentArray.forEach((comment) => {
//     const targetComment = comment.comment;
//     const buttonTester = `delete${comment.id}`;
//     if (buttonTester === buttonId) {
//       if (comment.contentEditable === false) {
//         targetComment.contentEditable = true;
//         document.getElementById(buttonId).innerHTML = 'Edit comment';
//       } else if (comment.contentEditable === true) {
//         targetComment.contentEditable = false;
//         document.getElementById(buttonId).innerHTML = 'Save change';
//       }
//     }
//   });
// };

const editBtnListener = () => {
  const editBtnArray = Array.from(document.getElementsByClassName('editBtn'));
  console.error(editBtnArray);
  // editBtnArray.forEach((button) => {
  //   button.addEventListener('click', editComment);
  // });
};

export default { editBtnListener };
