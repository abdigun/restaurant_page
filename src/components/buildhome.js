
//  import images
import ing1 from '../imgs/ing_1.png';
import ing2 from '../imgs/base-1.svg';
import ing3 from '../imgs/ing_1.svg';
import ing4 from '../imgs/ing_2.svg';
import ing5 from '../imgs/ing_3.svg';
import ing6 from '../imgs/ing_4.svg';
import ing7 from '../imgs/ing_5.svg';
import ing8 from '../imgs/ing_6.svg';
import ing9 from '../imgs/ing_7.svg';
import ing10 from '../imgs/ing_8.svg';
import ing11 from '../imgs/ing_9.svg';
import ing12 from '../imgs/ing_10.svg';
import ing13 from '../imgs/ing_11.svg';
import ing14 from '../imgs/ing_12.svg';
import ing15 from '../imgs/ing_13.svg';



const buildHOME = function () {

	function ec(tag) {
		
		this.element = document.createElement(tag);
		return this.element;

	}

	// 1. home container
	const newContent = document.createElement('main');
	newContent.setAttribute('id', 'contentmain');
	document.getElementById('container').appendChild(newContent);
	let homeContainer = new ec('div');
	homeContainer.setAttribute('class' , 'home-all-cont');
	document.getElementById('contentmain').appendChild(homeContainer);

	//  2. title container

	let homeTitleCont = new ec('div');
	homeTitleCont.setAttribute('class' , 'home-title-cont');
	homeContainer.appendChild(homeTitleCont);

	// 3. title restaurant 

	let homeTitleSecCont = new ec('div');
	homeTitleSecCont.setAttribute('class', 'home-title-sec-cont');
	homeTitleCont.appendChild(homeTitleSecCont);

	let restaurantTitle = new ec('h2');
	restaurantTitle.setAttribute('class', 'restaurant-title');
	restaurantTitle.innerHTML = "ABDIGUN RESTAURANT.";
	homeTitleSecCont.appendChild(restaurantTitle);

	// 3.1 container description + description

	let homeDescCont = new ec('div');
	homeDescCont.setAttribute('class' , 'home-desc-cont');
	homeTitleSecCont.appendChild(homeDescCont);

	let homeDesc = new ec('p');
	homeDesc.setAttribute('class', 'home-desc');
	homeDescCont.appendChild(homeDesc);
	homeDesc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


	// 3.2 container soc media + soc media

	let restaurantSocHome = new ec('div');
	restaurantSocHome.setAttribute('class' , 'restaurant-soc-media');
	homeTitleSecCont.appendChild(restaurantSocHome);

	restaurantSocHome.innerHTML = `

		<div class="soc-home-cont">							
			<div class="soc-home">
				<a href="https://www.instagram.com/niceguyfuckyou/">
					<i class="fab fa-instagram"></i>
				</a>
			</div>
			<div class="soc-home">
				<a href="https://www.facebook.com/mohd.azahan/"><i class="fab fa-facebook-square"></i></a>
			</div>
			<div class="soc-home">
				<a href="https://codepen.io/abdigun90"><i class="fab fa-codepen"></i></a>
			</div>
			<div class="soc-home">
				<a href="https://github.com/abdigun"><i class="fab fa-github-square"></i></a>
			</div>		
		</div>

	`;

	// 4. home img container and img

	let imgHomeCont = new ec('div');
	imgHomeCont.setAttribute('class', 'img-home-cont');
	homeContainer.appendChild(imgHomeCont);

	let img1 = new ec('img');
	let img2 = new ec('img');
	let img3 = new ec('img');
	let img4 = new ec('img');
	let img5 = new ec('img');
	let img6 = new ec('img');
	let img7 = new ec('img');
	let img8 = new ec('img');
	let img9 = new ec('img');
	let img10 = new ec('img');
	let img11 = new ec('img');
	let img12 = new ec('img');
	let img13 = new ec('img');
	let img14 = new ec('img');
	let img15 = new ec('img');

	img1.setAttribute('class' , 'pic1');
	img2.setAttribute('class' , 'pic2');
	img3.setAttribute('class' , 'pic3');
	img4.setAttribute('class' , 'pic4');
	img5.setAttribute('class' , 'pic5');
	img6.setAttribute('class' , 'pic6');
	img7.setAttribute('class' , 'pic7');
	img8.setAttribute('class' , 'pic8');
	img9.setAttribute('class' , 'pic9');
	img10.setAttribute('class' , 'pic10');
	img11.setAttribute('class' , 'pic11');
	img12.setAttribute('class' , 'pic12');
	img13.setAttribute('class' , 'pic13');
	img14.setAttribute('class' , 'pic14');
	img15.setAttribute('class' , 'pic15');

	img1.src = ing1;
	img2.src = ing2;
	img3.src = ing3;
	img4.src = ing4;
	img5.src = ing5;
	img6.src = ing6;
	img7.src = ing7;
	img8.src = ing8;
	img9.src = ing9;
	img10.src = ing10;
	img11.src = ing11;
	img12.src = ing12;
	img13.src = ing13;
	img14.src = ing14;
	img15.src = ing15;

	imgHomeCont.appendChild(img1);
	imgHomeCont.appendChild(img2);
	imgHomeCont.appendChild(img3);
	imgHomeCont.appendChild(img4);
	imgHomeCont.appendChild(img5);
	imgHomeCont.appendChild(img6);
	imgHomeCont.appendChild(img7);
	imgHomeCont.appendChild(img8);
	imgHomeCont.appendChild(img9);
	imgHomeCont.appendChild(img10);
	imgHomeCont.appendChild(img11);
	imgHomeCont.appendChild(img12);
	imgHomeCont.appendChild(img13);
	imgHomeCont.appendChild(img14);
	imgHomeCont.appendChild(img15);




}

export {buildHOME};