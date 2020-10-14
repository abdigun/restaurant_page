
// import recipe img
import recipe1 from '../imgs/recipe-1.jpg';
import recipe2 from '../imgs/recipe-2.jpg';
import recipe3 from '../imgs/recipe-3.jpg';



import menubg3 from '../imgs/ing_1.svg';
import menubg4 from '../imgs/ing_2.svg';
import menubg5 from '../imgs/ing_3.svg';
import menubg6 from '../imgs/ing_4.svg';
import menubg7 from '../imgs/ing_5.svg';
import menubg8 from '../imgs/ing_6.svg';
import menubg9 from '../imgs/ing_7.svg';
import menubg10 from '../imgs/ing_8.svg';
import menubg11 from '../imgs/ing_9.svg';
import menubg12 from '../imgs/ing_10.svg';
import menubg13 from '../imgs/ing_11.svg';
import menubg14 from '../imgs/ing_12.svg';
import menubg15 from '../imgs/ing_13.svg';

// 1. menu + container

const buildMENU = function () {
	
	function ec(tag) {
		
		this.element = document.createElement(tag);
		return this.element;

	}	

	// 1. menu container
	const newContent = document.createElement('main');
	newContent.setAttribute('id', 'contentmain');
	document.getElementById('container').appendChild(newContent);
	let menuContainer = new ec('div');
	menuContainer.setAttribute('class' , 'menu-cont');
	document.getElementById('contentmain').appendChild(menuContainer);

	// 2. menu container background

	let menuContBack = new ec('div');
	menuContBack.setAttribute('class', 'menu-background-cont');
	menuContainer.appendChild(menuContBack);

	// 3. menu main container

	let menuMainCont = new ec('div');
	menuMainCont.setAttribute('class', 'main-menu-cont');
	menuContainer.appendChild(menuMainCont);

	// 4. menu main

	let menuMain = new ec('div');
	menuMain.setAttribute('class' , 'main-menu');
	menuMainCont.appendChild(menuMain);

	// 5. menu create content function

	let mymenu = [];

	function menuContent (imgs,description) {
		this.imgs = imgs;
		this.description = description;
	}

	function acceptMenu (mymenu) {

		let menuHTML = '';

		for (let menuContent of mymenu ) {

			menuHTML += `

							<div class="menu-recipe-cont">
								<div class="menu-recipe-img-cont" >
									<div class="cont-img-recipe">
										<img src="${menuContent.imgs}">
									</div>
								</div>
								<div class="menu-recipe-desc-cont">
									<div class="menu-recipe-desc">
										${menuContent.description}
									</div>
								</div>							
							</div>

						`

		}

		menuMain.innerHTML = menuHTML;
	}

	function addMenuToContent(menuContent) {

		mymenu.push(menuContent);
		acceptMenu(mymenu);
		
	}

	addMenuToContent(new menuContent(recipe1, "authentic hainanese chicken rice"));
	addMenuToContent(new menuContent(recipe2, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
	addMenuToContent(new menuContent(recipe3, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
	addMenuToContent(new menuContent(recipe1, "authentic hainanese chicken rice"));

	// 6. background + container

	let menubackmaincont = new ec('div');
	menubackmaincont.setAttribute('class' , 'menu-main-background-cont')
	menuContBack.appendChild(menubackmaincont);

	let menu1background = new ec('div');
	let menu2background = new ec('div');
	let menu3background = new ec('div');

	menu1background.setAttribute('class' , 'menu-1-background');
	menu2background.setAttribute('class', 'menu-2-background');
	menu3background.setAttribute('class', 'menu-3-background');

	menubackmaincont.appendChild(menu1background);
	menubackmaincont.appendChild(menu2background);
	menubackmaincont.appendChild(menu3background);


	let menubackimg3 = new ec('img');
	let menubackimg4 = new ec('img');
	let menubackimg5 = new ec('img');
	let menubackimg6 = new ec('img');
	let menubackimg7 = new ec('img');
	let menubackimg8 = new ec('img');
	let menubackimg10 = new ec('img');
	let menubackimg11 = new ec('img');
	let menubackimg12 = new ec('img');
	let menubackimg13 = new ec('img');
	let menubackimg14 = new ec('img');
	let menubackimg15 = new ec('img');


	menubackimg3.setAttribute('class' , 'menu-back-img-3');
	menubackimg4.setAttribute('class' , 'menu-back-img-4');
	menubackimg5.setAttribute('class' , 'menu-back-img-5');
	menubackimg6.setAttribute('class' , 'menu-back-img-6');
	menubackimg7.setAttribute('class' , 'menu-back-img-7');
	menubackimg8.setAttribute('class' , 'menu-back-img-8');
	menubackimg10.setAttribute('class' , 'menu-back-img-10');
	menubackimg11.setAttribute('class' , 'menu-back-img-11');
	menubackimg12.setAttribute('class' , 'menu-back-img-12');
	menubackimg13.setAttribute('class' , 'menu-back-img-13');
	menubackimg14.setAttribute('class' , 'menu-back-img-14');
	menubackimg15.setAttribute('class' , 'menu-back-img-15');


	menubackimg3.src = menubg3;
	menubackimg4.src = menubg4;
	menubackimg5.src = menubg5;
	menubackimg6.src = menubg6;
	menubackimg7.src = menubg7;
	menubackimg8.src = menubg8;
	menubackimg10.src = menubg10;
	menubackimg11.src = menubg11;
	menubackimg12.src = menubg12;
	menubackimg13.src = menubg13;
	menubackimg14.src = menubg14;
	menubackimg15.src = menubg15;


	menubackmaincont.appendChild(menubackimg3);
	menubackmaincont.appendChild(menubackimg4);
	menubackmaincont.appendChild(menubackimg5);
	menubackmaincont.appendChild(menubackimg6);
	menubackmaincont.appendChild(menubackimg7);
	menubackmaincont.appendChild(menubackimg8);
	menubackmaincont.appendChild(menubackimg10);
	menubackmaincont.appendChild(menubackimg11);
	menubackmaincont.appendChild(menubackimg12);
	menubackmaincont.appendChild(menubackimg13);
	menubackmaincont.appendChild(menubackimg14);
	menubackmaincont.appendChild(menubackimg15);




}

export {buildMENU};
