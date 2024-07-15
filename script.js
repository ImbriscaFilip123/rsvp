const submitBtn = document.querySelector(".submit-button");
const wrapper = document.querySelector(".wrapper");
const addInput = document.querySelector("input");
const invitedList = document.querySelector("#invitedList");
const editBtns = document.querySelectorAll("editBtn");
const removeBtns = document.querySelectorAll("remove-button");
const saveBtns = document.querySelectorAll("saveBtn");
const editInputs = document.querySelectorAll("editInput");
const checkboxHide = document.querySelector(".checkboxHide");

checkboxHide.addEventListener("click", () => {
 
    

    const lists = invitedList.querySelectorAll("li");

    lists.forEach((list) => {
     
        if(!list.classList.contains("checked")){

          list.classList.toggle("unchecked");    
            
        }
    })

})



function addItem(item) {
   let newItem = document.createElement("li");
   newItem.innerHTML = `<span>${item}</span><label>Confirmed<input type="checkbox" class="checkbox"></label><button class="editBtn">edit</button><button class="remove-button">remove</button>`
   return newItem;
}


submitBtn.addEventListener("click", () => {
  
    let text = addInput.value;
    let newText = addItem(text); 
    invitedList.appendChild(newText);
})





wrapper.addEventListener("click", (event) => {

    
    let object = event.target;

    if(object.classList.contains("editBtn")) {
       

        let li=object.parentNode;

        let text=li.firstChild.textContent;

       
        li.firstChild
       
        li.innerHTML=`<input value="${text}" type="text" class="editInput"><label>Confirmed<input type="checkbox"></label><button class="saveBtn">save</button><button class="remove-button">remove</button> `
       


    }else if(object.classList.contains("remove-button")){
      
      console.log("test");
      let li=object.parentNode;
      let container=li.parentNode;


      container.removeChild(li);

    }else if(object.classList.contains("saveBtn")){
        let li=object.parentNode;      
        let text=li.children[0].value;

        console.log(text);
        li.innerHTML=`<span>${text}</span><label>Confirmed<input type="checkbox"></label><button class="editBtn">edit</button><button class="remove-button">remove</button>`

       

  
    }
    else if(object.classList.contains("checkbox")){

        console.log("test checkbox");
        
        let li = object.parentNode;

        li.parentNode.classList.add("checked");

      
       
    }

    

})