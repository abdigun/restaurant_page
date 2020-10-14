 
// main structure
import {buildSTRUC} from '../components/buildstruc.js';
// nav
import {buildNAV} from '../components/buildnav.js';
// home
import {buildHOME} from '../components/buildhome.js';
// menu
import {buildMENU} from '../components/buildmenu.js';
// contact
import {buildCONTACT} from '../components/buildcontact.js';


	


	const pageLOAD = function () {

		buildSTRUC();
		buildNAV();

		const nav = document.querySelector('.nav-cont-all');

		const swap = function(event) {
			const newcontentattach = event.target.closest('div');
			const mainSection = document.querySelector('#contentmain');

			if (!newcontentattach.dataset.value) return;



			if (mainSection) {
				mainSection.remove();
			}

			if (newcontentattach.dataset.value == '0') {
				buildHOME();
				console.log(1);
			} else if (newcontentattach.dataset.value == '1') {
				buildMENU();
				console.log(2);
			} else if (newcontentattach.dataset.value == '2') {
				buildCONTACT();
				console.log(3);
			}
			
		};
		nav.addEventListener('click', swap);
		nav.querySelector('.home-cont-btn').click();

	} 


pageLOAD();
