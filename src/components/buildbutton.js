// Build button for message form
const buildBUTTON = () => {
  let submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('class' , 'submit-form-btn')

  return submitButton;
}

export default buildBUTTON;