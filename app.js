let btn = document.querySelector(".btn");
let todoText = document.getElementById("todotext");
let items = document.querySelector(".items");
let msg = document.querySelector(".todo");
let btn2 = document.querySelector(".edit");




//add element on enter
todoText.addEventListener("keypress",(event)=>{
  if (event.key == "Enter"){
    // Cancel the default action, if needed
    event.preventDefault();
    // console.log(event.key)
    // to triger the click event of the add todo button
    if (todoText.value!="") {
    btn.click();
  }
  else{
    alert("Todo field is empty!")
  }
  }
})

//add element

btn.addEventListener("click", () => {
  let li = document.createElement("li");

  let trash = document.createElement("i");
  let edit = document.createElement("i");

  trash.classList.add("fas", "fa-trash");
  edit.classList.add("fas", "fa-edit");

  if (todoText.value!="") {
    let span = document.createElement("span");
    items.appendChild(li);
    li.appendChild(span);
    li.appendChild(trash);
    li.appendChild(edit);
    span.innerText = todoText.value;
    console.log(span.innerText)
    li.style.cssText = "animation-name:slide";
    todoText.focus();
    todoText.value = " ";
  }
  else{
    alert("Todo field is empty!")
  }
  todoText.value = "";
}
);


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
items.addEventListener("click", event => {
  if (event.target.classList[1] === "fa-edit") {
    // console.log(event.target.classList[1]);
  //   btn2.style.display = "block";
  //   btn.style.display = "none";
  //   let element = event.target.parentElement;
  //   let _span = element.querySelector('span')
  //   console.log("todo:",_span);
  //   console.log(element)
  //   todoText.value = element.innerText;
  //   todoText.style.color = "#00ffff";
  //   btn2.addEventListener("click", () => {
  //     if (todoText.value!=""  ){
  //     _span.innerText = todoText.value;
  //     console.log(_span,_span.innerText)
  //     let p = document.createElement("p");
  //     p.classList.add("msg");
  //     p.innerText = "edited todo successfully!";
  //     // p.style.cssText="color:lightgreen; font-size:10px;"
  //     msg.insertBefore(p, msg.firstChild);
  //     p.addEventListener("transitionend", () => {
  //       p.remove();
  //   });
  //   }
  //   btn2.style.display = "none";
  //   btn.style.display = "block";
  //   todoText.value = "";
  //   });
  // }
  let val = prompt("enter new value")
  let element = event.target.parentElement;
  let span = element.querySelector("span");
  span.innerText=val;}
});



//check or unchecking an element
items.addEventListener("click", (event) => {
  let element = event.target;
  // console.log(element)
  element.classList.toggle("checked");
});

