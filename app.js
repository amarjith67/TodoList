let btn = document.querySelector(".btn");
let todoText = document.getElementById("todotext");
let items = document.querySelector(".items");
let msg = document.querySelector(".todo");
let btn2 = document.querySelector(".edit");
//add element
btn.addEventListener("click", () => {
  let li = document.createElement("li");
  let span = document.createElement("span");

  let trash = document.createElement("i");
  let edit = document.createElement("i");

  trash.classList.add("fas", "fa-trash");
  edit.classList.add("fas", "fa-edit");

  if (todoText.value) {
    span.innerText = todoText.value;
    console.log(span.innerText)
    li.style.cssText = "animation-name:slide";
    items.appendChild(li);
    li.appendChild(span);
    li.appendChild(trash);
    li.appendChild(edit);
    todoText.value = " ";
    todoText.focus();
  }
});

//delete element
items.addEventListener("click", (event) => {
  if (event.target.classList[1] === "fa-trash") {
    let element = event.target.parentElement;
    // console.log(element)
    element.classList.add("slideOut");
    element.addEventListener("transitionend", () => {
      element.remove();
    });
  }
});

//edit an element
items.addEventListener("click", (event) => {
  if (event.target.classList[1] === "fa-edit") {
    console.log(event.target.classList[1]);
    btn2.style.display = "block";
    btn.style.display = "none";
    let element = event.target.parentElement;
    // console.log(element)
    todoText.value = element.innerText;
    console.log("todo:",todoText.value);
    todoText.style.color = "#00ffff";
    editLogic(element);   
  }
});

function editLogic(element){
    let span = element.querySelector('span')
    btn2.addEventListener("click", () => {
        span.innerHTML = todoText.value;
        console.log(span.innerText)
        todoText.value = "";
        let p = document.createElement("p");
        p.classList.add("msg");
        p.innerText = "edited todo successfully!";
        // p.style.cssText="color:lightgreen; font-size:10px;"
        msg.insertBefore(p, msg.firstChild);
        p.addEventListener("transitionend", () => {
          p.remove();
      });
      btn2.style.display = "none";
      btn.style.display = "block";
      });
}

//check or unchecking an element
items.addEventListener("click", (event) => {
  let element = event.target;
  // console.log(element)
  element.classList.toggle("checked");
});
