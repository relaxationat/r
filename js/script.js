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

let linkMenu = document.querySelectorAll(".menu-right a");


if (window.innerWidth<601) {
	linkMenu.forEach((e)=>{
		e.addEventListener("click",closeMenu);
	});
}

/// animation hrAnimation

const hrAnimation = (e) =>{
	hr = e.target.nextElementSibling;
	hr.className = "hovered";
}


/// menu animation

if (window.innerWidth>600) {
	linkMenu.forEach((e)=>{
		e.addEventListener("mouseover",hrAnimation);
		e.addEventListener("mouseout",(e)=>{
			hr = e.target.nextElementSibling;
			hr.className = "not-hover";
		});
	});
}


/// animation fadeMove

logo = document.querySelector(".after-menu .fadeMove");
let animationInterval = setInterval(()=>{
	logo.classList.remove("fadeMove");
},400);





/// animation moveAnimation
/*
window.onscroll = () =>{
	let fromTop = this.scrollY;
	let x = fromTop/2;
	x = Math.round(x);
	if (window.innerWidth>=1150 & x>=0 & x<=90) {
		document.querySelector(".after-menu").style.backgroundPosition =`50% -${x+90}px`;

	}else if(x>=0 & x<=100){
		document.querySelector(".after-menu").style.backgroundPosition =`50% -${x+50}px`;
	}
	
};*/

/// popUpModal 
let prices = document.querySelector(".price img");
let overlay = document.querySelector(".overlay");
const popUpModal = () =>{
	prices.style.display = "block";
	overlay.style.display = "block";

	overlay.addEventListener("click", () =>{

	prices.style.display = "none";
	overlay.style.display = "none";

	});

	document.addEventListener("keydown", key =>{
			if(key.keyCode === 27){
				prices.style.display = "none";
				overlay.style.display = "none";
			}	
	});

}

/// gallery


const popUpImage = (img, type) =>{

	overlay.style.display = "block";
	document.querySelector(`.${type}Img`).style.display = "block";
	document.querySelector(`.${type}Img`).style.height = "200px";
	document.querySelector(`.${type}Img`).style.padding = "0";
	document.querySelector(`.${type}Img`).setAttribute("src", img.getAttribute("src"));

	overlay.addEventListener("click", () =>{
		overlay.style.display = "none";
		document.querySelector(`.${type}Img`).style.display = "none";
	});

	document.addEventListener("keydown", key =>{
			if(key.keyCode === 27){
				document.querySelector(`.${type}Img`).style.display = "none";
				overlay.style.display = "none";
			}	
	});
}



leftArrow = document.querySelector(".leftArrow");
rightArrow = document.querySelector(".rightArrow");
let slideImages = document.querySelectorAll(".row img");


let slideSh = [];
slideImages.forEach((image)=>{
	image.addEventListener("click",(img)=>{
		popUpImage(img.target, "gallery");
	});
	slideSh.push(image.getAttribute("src"));
});

let i = 0;

slide = document.querySelector(".slideshow img");
	slide.addEventListener("click",(image)=>{
		popUpImage(image.target, "slide");
	});

const moveBack = (i) =>{
	
	slide.setAttribute("src", `${slideSh[i]}`)
	
}

const moveFrwd = (i) =>{
	slide.setAttribute("src", `${slideSh[i]}`)
	
}


leftArrow.addEventListener("click", ()=>{
	i=i-1;
	if (i>=0 & i<=slideSh.length -1) {
		moveBack(i);
	}else{
		i = slideSh.length -1;
		moveBack(i);
	}
	
});
rightArrow.addEventListener("click",()=>{
	i=i+1;
	if (i>=0 & i<=slideSh.length -1) {
		moveFrwd(i);
	}else{
		i = 0;
		moveFrwd(i);
	}
});






