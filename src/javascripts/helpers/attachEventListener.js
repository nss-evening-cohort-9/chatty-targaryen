const addDeleteEvents = (attFunc) => {
  const deleteButtons = document.getElementsByClassName('deleteButton');
  console.error(deleteButtons);
  deleteButtons.foreach((button) => {
    button.addEventListener('click', attFunc);
  });
};

export default { addDeleteEvents };
