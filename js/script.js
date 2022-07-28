let menu =  document.querySelector(".menu ul");/// menu
let btn = document.querySelector(".menu button"); /// menu button

///close menu
const closeMenu = () =>{
	menu.style.display = "none";
	btn.className = "menu-button"
	btn.innerText = "="
}

/// responsive menu
const mobileMenu = () => {
	btn.className = "menu-button-clicked";
	menu.style.display = "block";

	if (btn.innerText === "~") {
		closeMenu();
		return;
	}
	btn.innerText = "~"
}

/// close menu when clicked link

let linkMenu = document.querySelectorAll(".menu-right li");

if (window.innerWidth<451) {
	linkMenu.forEach((e)=>{
		e.addEventListener("click",closeMenu);
	});
}

/// contact

const mov = (el) => {
	if (window.innerWidth>801) {
		el.className = "container shadow2 hovered"
	}

	}
const mou = (el) =>{
	if (window.innerWidth>801) {
		el.className = "container shadow2 not-hovered"
	}

	}
