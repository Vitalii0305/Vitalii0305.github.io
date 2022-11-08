function btn1Click(n) {
  let content = document.querySelector(n);
  console.log(content.classList);
  content.classList.toggle("hiden");
}
function deleteDiv(n){
	document.querySelector(n).outerHTML = '';
}
let editForm1 = null;
let editForm2 = null ;
function changeEL(name,describe){
	let inp1 = document.getElementById('name');
	let inp2 = document.getElementById('describe');
	let nowName = document.getElementById(name).textContent;
	let nowDesc = document.getElementById(describe).textContent;
	inp1.value = nowName;
	inp2.value = nowDesc;
	editForm1 = document.getElementById(name);
	editForm2 = document.getElementById(describe);
}
function acceptChange () {
	let inp1 = document.getElementById('name').value;
	let inp2 = document.getElementById('describe').value;
	editForm1.textContent = inp1;
	editForm2.textContent = inp2;
}
