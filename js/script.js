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

/// animation fadeMove

logo = document.querySelector(".after-menu .fadeMove");
let animationInterval = setInterval(()=>{
	logo.classList.remove("fadeMove");
},500);

/// animation moveAnimation

window.onscroll = () =>{
	let fromTop = this.scrollY;
	let x = fromTop/2;
	x = Math.round(x);
	if (window.innerWidth>=1150 & x>=0 & x<=90) {
		document.querySelector(".after-menu").style.backgroundPosition =`50% -${x+90}px`;
	}else if(x>=0 & x<=100){
		document.querySelector(".after-menu").style.backgroundPosition =`50% -${x+50}px`;
	}
	
};


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
