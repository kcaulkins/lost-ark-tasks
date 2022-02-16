// 1. Save localstorage on checkbox click/unclick
let boxes = document.getElementsByClassName('uk-checkbox').length;
function save() {	
  for(let i = 1; i <= boxes; i++){
	  var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked);	
  }
}

function reset(e) {
    resetBoxes = e.parentElement.parentElement.querySelectorAll('input[type=checkbox]');
    console.log(resetBoxes.length);
    resetBoxes.forEach(element => {
        element.checked = false;
        localStorage.setItem("checkbox" + String(element.id), element.checked);
    });
}

// On page load, mark the selected ones
for(let i = 1; i <= boxes; i++){
  if(localStorage.length > 0){
    var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
    document.getElementById(String(i)).checked = checked;
  }
}
window.addEventListener('change', save);