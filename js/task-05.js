const refs = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameOutput.textContent = event.currentTarget.value;
  if (refs.nameOutput.textContent.length === 0) {
    refs.nameOutput.textContent = 'незнакомец';
  }
}
