const input = document.querySelector(".input__todo");
const addBtn = document.querySelector(".btn__add");
const list = document.querySelector("ul");
const twoButtons = document.createElement("div");


const addNewTask = () => {
  // creation li elements with new tasks
  let ul = document.querySelector(".todo");
  let newTodo = document.createElement("li");
  newTodo.className = "new__todo";

  newTodo.innerHTML = `<input type='checkbox' class='checkbox'><span>${input.value}</span><button class='delete'>❌</button>`;

//  do not add empty line
  if (input.value != '') {
   ul.prepend(newTodo);
}
 // adding delete buttons only after 1st task item exist
  if (newTodo.innerHTML.length > 0) {
    document.querySelector(".two__buttons").style.display = "flex";
  }

  // delete done tasks
  let deleteButton = document.querySelector(".delete");
  let checkedItem = document.querySelector(".checkbox");
  let doneItem = document.querySelector("span");

  // if task checked add new style
  const cheacked = () => {
    doneItem.classList.toggle("mystyle");
  };
  checkedItem.addEventListener("click", cheacked);

  // delete task if it is done
  const deleteFunc = () => {
    if (doneItem.classList.contains("mystyle")) {
      newTodo.remove();
    }
  };
  deleteButton.addEventListener("click", deleteFunc);

  const deleteDone = document.querySelector(".delete__done");
  const deleteAllBtn = document.querySelector(".delete__all");

  // function for button DELETE ALL
  const deletionAllfunc = () => {
    newTodo.remove();
      document.querySelector(".two__buttons").style.display = "none";
  };

  deleteDone.addEventListener("click", deleteFunc);
  deleteAllBtn.addEventListener("click", deletionAllfunc);
  // clear input area text, agter adding item to the list
  input.value = '';
};
addBtn.addEventListener("click", addNewTask);

// delete_buttons creation
todoWrap = document.querySelector(".todo__wrap");

twoButtons.className = "two__buttons";
twoButtons.innerHTML = `<button class = "delete__done"> Delete Done </button> <button class = "delete__all"> Delete All </button>`;
todoWrap.append(twoButtons);
document.querySelector(".two__buttons").style.display = "none";
