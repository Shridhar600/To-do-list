//declaring a variable add
function update(){
    console.log("clicked");
  // moving data from user input to local storage using JSON and ids = title and Description
  tit = document.getElementById('title').value;
  desc = document.getElementById('description').value;

  if (localStorage.getItem('itemsJson') == null) {
    // itemsJson starting me 0 items ke sath
    itemsJsonArray = [];
    itemsJsonArray.push([tit, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
  } else {
    itemsJsonArraystr = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsJsonArraystr);
    itemsJsonArray.push([tit, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
  }

  //now to fill the table;

  let tablebody = document.getElementById("tablebody");
  let str = "";
  itemsJsonArray.forEach((element, index) => {
    str += `
    <tr>
    <th scope="row">${index + 1 }</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})" >Delete</button></td>
  </tr>`;
  });
  tablebody.innerHTML = str;
}
add = document.getElementById("addtolist");
add.addEventListener("click", update);
update();


function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemsJsonArraystr = localStorage.getItem('itemsJson')
    itemsJsonArray = JSON.parse(itemsJsonArraystr);
    //deleted itemindex element from the array;
    itemsJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    update();
}