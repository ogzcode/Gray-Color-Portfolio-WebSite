function changeMenu(node){
	node.classList.toggle("menu-show");
	document.getElementById("menu_node").classList.toggle("show");
}

function returnBefore(){
	const btn = document.querySelector(".menu-button");
	const menu = document.querySelector("#menu_node");
	
	if (menu.className == "show"){
		menu.className = "";
		btn.classList.toggle("menu-show");
	}
}