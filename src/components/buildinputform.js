const buildInput = (name) => {
	// build components and put into holder
  const holder = document.createElement('div');
  holder.setAttribute('class', `input-group`);
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', name);
  input.setAttribute('class', `form-control ${name}-input`);
  input.setAttribute('required', true);
  input.setAttribute('placeholder' , `${name}`);



  // Add event listener to know to adjust label text if we have entered anything
  input.addEventListener('focusout', (e) => {
    if(e.target.textLength > 0) {
      e.target.setAttribute('class', 'form-control has-value');
    } else {
      e.target.setAttribute('class', 'form-control');
    }
  })

  holder.appendChild(input);


  return holder;
}

const buildTextArea = (name) => {
  // Create eleements to append to holder
  const holder = document.createElement('div');
  holder.setAttribute('class', 'input-group');
  const textarea = document.createElement('textarea');
  textarea.setAttribute('type', 'text');
  textarea.setAttribute('name', name);
  textarea.setAttribute('placeholder' , 'message')
  textarea.setAttribute('class', 'form-control message-input');
  textarea.setAttribute('required', true);




  // Add event listener to know to adjust label text if we have entered anything 
  textarea.addEventListener('focusout', (e) => {
    if(e.target.textLength > 0) {
      e.target.setAttribute('class', 'form-control has-value');
    } else {
      e.target.setAttribute('class', 'form-control');
    }
  })

  holder.appendChild(textarea);


  return holder;
}

export {
  buildInput,
  buildTextArea,
};