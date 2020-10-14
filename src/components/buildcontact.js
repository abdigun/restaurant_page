
import {buildInput, buildTextArea} from '../components/buildinputform.js';
import buildBUTTON from '../components/buildbutton.js';


const buildCONTACT = function () {

	function ec(tag) {
		
		this.element = document.createElement(tag);
		return this.element;
	}

	// 1. contact home container
	const newContent = document.createElement('main');
	newContent.setAttribute('id', 'contentmain');
	document.getElementById('container').appendChild(newContent);
	let contactContainer = new ec('div');
	contactContainer.setAttribute('class' , 'contact-all-container');
	document.getElementById('contentmain').appendChild(contactContainer);

	// 2. contact second container
	let contSecCont = new ec('div');
	contSecCont.setAttribute('class', 'contact-sec-container');
	contactContainer.appendChild(contSecCont); 

	// 3. contact Title
	let contTitleCont = new ec('div');
	contTitleCont.setAttribute('class' , 'contact-title-container')
	contSecCont.appendChild(contTitleCont);

	let contTitle = new ec('h2');
	contTitle.setAttribute('class', 'contact-title');
	contTitle.innerHTML = "CONTACT US";
	contTitleCont.appendChild(contTitle);

	// 4. details reservation 
	let detailContactCont = new ec('div');
	detailContactCont.setAttribute('class' , 'detail-contact-container');
	contactContainer.appendChild(detailContactCont);

	let detailEvent1Cont = new ec('div');
	detailEvent1Cont.setAttribute('class' , 'detail-1-container-event');
	detailContactCont.appendChild(detailEvent1Cont);

	let detailEvent2Cont = new ec('div');
	detailEvent2Cont.setAttribute('class', 'detail-2-container-event');
	detailContactCont.appendChild(detailEvent2Cont);

	let contTitleEventContact1 = new ec('div');
	let titleEventContact = new ec('h2');
	let contTitleEventContact2 = new ec ('div');
	let contactEventDetailPre1 = new ec('p');
	let contactEventDetailPre2 = new ec('p');
	let contactEventDetailPre3 = new ec('p');

	contTitleEventContact1.setAttribute('class' , 'cont-title-event');
	titleEventContact.setAttribute('class' , 'title-event-contact-1');
	contTitleEventContact2.setAttribute('class' , 'cont-title-event-2');
	contactEventDetailPre1.setAttribute('class' , 'contact-event-det-pre-1');
	contactEventDetailPre2.setAttribute('class' , 'contact-event-det-pre-2');
	contactEventDetailPre3.setAttribute('class' , 'contact-event-det-pre-3');

	detailEvent1Cont.appendChild(contTitleEventContact1);
	contTitleEventContact1.appendChild(titleEventContact);
	detailEvent1Cont.appendChild(contTitleEventContact2);
	contTitleEventContact2.appendChild(contactEventDetailPre1);
	contTitleEventContact2.appendChild(contactEventDetailPre2);
	contTitleEventContact2.appendChild(contactEventDetailPre3);

	titleEventContact.innerHTML = "Your Event";
	contactEventDetailPre1.innerHTML = "Tribe welcomes events, parties and celebrations.";
	contactEventDetailPre2.innerHTML = "We are happy to discuss booking the whole facility or part of it for your event.";
	contactEventDetailPre3.innerHTML = "Just give us a call to discuss rates, menus, and any special requirements you have.";

	let tel = "+6011-1053-9156";
	let email = "zzz.azahan@yahoo.com";

	let contTitleEventContact3 = new ec('div');
	let contTitleEventContact4 = new ec('div');
	let titleEventContact2 = new ec('h2');
	let contactEventPres1 = new ec('p');
	let contactEventPres2 = new ec('p');
	let contactEventPres3 = new ec('p');
	let contactDetailPres1 = new ec('div');
	let contactDetailPres2 = new ec('div');

	contTitleEventContact3.setAttribute('class' , 'cont-title-event-3');
	contTitleEventContact4.setAttribute('class' , 'cont-title-event-4');
	titleEventContact2.setAttribute('class' , 'title-event-contact-2');
	contactEventPres1.setAttribute('class' , 'contact-event-detail-pre-1');
	contactEventPres2.setAttribute('class' , 'contact-event-detail-pre-2');
	contactEventPres3.setAttribute('class' , 'contact-event-detail-pre-3');
	contactDetailPres1.setAttribute('class' , 'contact-event-detail-af-1');
	contactDetailPres2.setAttribute('class' , 'contact-event-detail-af-2');
	
	detailEvent2Cont.appendChild(contTitleEventContact3);
	contTitleEventContact3.appendChild(titleEventContact2);
	detailEvent2Cont.appendChild(contTitleEventContact4);

	titleEventContact2.innerHTML = "Details";
	contactEventPres1.innerHTML = "To make a reservation by phone, call:";
	contactEventPres2.innerHTML = "Or to reserve by email:";
	contactDetailPres1.innerHTML = `<p class="tel-text">${tel}</p>` + `<a href=tel:${tel}><i class="fas fa-phone-square-alt"></i>`;
	contactDetailPres2.innerHTML = 	`<p class="email-text">${email}</p>` + `<a href=mailto:${email}><i class="fas fa-envelope-square"></i>`;
	contactEventPres3.innerHTML = "Or, just send us a message using the form below:";

	contTitleEventContact4.appendChild(contactEventPres1);
	contTitleEventContact4.appendChild(contactDetailPres1);
	contTitleEventContact4.appendChild(contactEventPres2);
	contTitleEventContact4.appendChild(contactDetailPres2);
	contTitleEventContact4.appendChild(contactEventPres3);

	// 5. create form // nanti ubah

	let contactFormCont = new ec('div');
	contactContainer.appendChild(contactFormCont);
	let contactFormTitle = new ec('h2');
	contactFormCont.appendChild(contactFormTitle);
	contactFormTitle.innerHTML = "Send Message";

	contactFormCont.setAttribute('class' , 'container-form-contact');
	contactFormTitle.setAttribute('class' , 'contact-form-title')


	// build and set component attributes
	let forms = new ec('form');
	forms.setAttribute('class' , 'contact-form');
	contactFormCont.appendChild(forms);

	//  set action to send our form info with formspree 
	forms.setAttribute('action' , 'https://formspree.io/f/meqpaqqa');
	forms.setAttribute('method', 'post');

	// container name email input
	let infoDiv = new ec('div');
	infoDiv.setAttribute('class', 'info-container');
	let nameInput = buildInput('name');
	let emailInput = buildInput('email');
	infoDiv.appendChild(nameInput);
	infoDiv.appendChild(emailInput);

	// container text area 
	let messageInput = buildTextArea('message');
	let messageDiv = new ec('div');
	messageDiv.setAttribute('class' , 'container-message');
	messageDiv.appendChild(messageInput);

	// button submit
	let submitButton = buildBUTTON();


	forms.appendChild(infoDiv);
	forms.appendChild(messageDiv);
	forms.appendChild(submitButton);

	//  6. map nnti ubah
	let containerMap = new ec('div');
	let mainMap = new  ec('div');
	mainMap.innerHTML = `

						<div style="width: 100%" class="map-cont">
							<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=9,%20Jalan%20Rampaisari%201e,%20Rampaisari,%2048010%20Rawang,%20Selangor+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
						</div>

						`;

	containerMap.setAttribute('class' , 'container-map');
	mainMap.setAttribute('class' , 'main-map-container')

	contactContainer.appendChild(containerMap);
	containerMap.appendChild(mainMap);
















	


}

export {buildCONTACT};
