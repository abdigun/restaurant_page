


//  build a nav tab container

const buildNAV = function () {

	function ec(tag) {
		
		this.element = document.createElement(tag);
		return this.element;

	}

	// 1. container
	let navContainer = new ec('div');
	navContainer.setAttribute('class' , 'nav-cont');

	document.getElementById('container').appendChild(navContainer);

	let  navContainerAll = new ec('div');
	navContainerAll.setAttribute('class' , 'nav-cont-all');

	navContainer.appendChild(navContainerAll);

	//  2. logo-container + logo

	let logoCont = new ec('div');
	logoCont.setAttribute('class' , 'logo-cont' );

	navContainerAll.appendChild(logoCont);
	
	let logo = new ec('div');
	logo.setAttribute('class' , 'logo');
	logo.innerHTML = "ABDIGUN";
	logoCont.appendChild(logo);

	//  3. home btn + container

	let homeContBtn = new ec('div');
	homeContBtn.setAttribute('class' , 'home-cont-btn');
	navContainerAll.appendChild(homeContBtn);

	let homeBtn = new ec('div');
	homeBtn.setAttribute('class', 'home-btn');
	homeBtn.innerHTML = "HOME";
	homeContBtn.appendChild(homeBtn);

	//  4. menu btn + container

	let menuContBtn = new ec('div');
	menuContBtn.setAttribute('class', 'menu-cont-btn');
	navContainerAll.appendChild(menuContBtn);

	let menuBtn = new ec('div');
	menuBtn.setAttribute('class' , 'menu-btn');
	menuBtn.innerHTML = "MENU";
	menuContBtn.appendChild(menuBtn);

	//  5. contact btn + container

	let conContBtn = new ec('div');
	conContBtn.setAttribute('class' , 'contact-cont-btn');
	navContainerAll.appendChild(conContBtn);

	let contBtn = new ec('div');
	contBtn.setAttribute('class' , 'contact-btn');
	contBtn.innerHTML = "CONTACT";
	conContBtn.appendChild(contBtn);

	//  6. social media 

	let socContBtn = new ec('div');
	socContBtn.setAttribute('class' , 'soc-cont-btn');
	navContainerAll.appendChild(socContBtn);

	let socSecCont = new ec('div');
	socSecCont.setAttribute('class', 'soc-sec-cont');
	socContBtn.appendChild(socSecCont);

	socSecCont.innerHTML = `

		<div class="soc">
			<a href="https://www.instagram.com/niceguyfuckyou/">
				<i class="fab fa-instagram"></i>
			</a>
		</div>
		<div class="soc">
			<a href="https://www.facebook.com/mohd.azahan/">
				<i class="fab fa-facebook-square"></i>
			</a>
		</div>
		<div class="soc">
			<a href="https://codepen.io/abdigun90">
			<i class="fab fa-codepen"></i>
			</a>
		</div>
		<div class="soc">
			<a href="https://github.com/abdigun">
			<i class="fab fa-github-square"></i>
			</a>
		</div>

	 `;

	 // 7. role 

	 const roleTab = (x,index) => {
	 	const tab = document.querySelector(x);
		tab.setAttribute('data-value' , index );

		return tab;
	 }

	 

	 const homeTab = roleTab(".home-cont-btn", '0');
	 const menuTab = roleTab(".menu-cont-btn" ,'1');
	 const contactTab = roleTab(".contact-cont-btn", '2');

}


export {buildNAV};
