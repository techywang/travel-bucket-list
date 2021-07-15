var addButton = document.getElementById("add");
var input = document.getElementById("enter");
var bucketList = document.querySelector("ul");

addButton.addEventListener("click", addItem);

function addItem() {

    if (input.value !== "") {
        // make li element
        var li = document.createElement("li");
        // put the input as the text of the element
        li.innerHTML = input.value;
        // add li element to the list
        bucketList.appendChild(li);

        li.addEventListener("click", function() {
            li.classList.toggle("cross");
        });
        li.addEventListener("dblclick", function() {
            this.remove();
        });
    }
    



    input.value = "";
}