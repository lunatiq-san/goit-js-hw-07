const refs = {
  inputRef: document.querySelector('#validation-input'),
  dataLength: document.querySelector('[data-length="6"]'),
};

console.log('dataLength', refs.dataLength);
refs.inputRef.addEventListener('change', onInputChange);

function onInputChange(event) {
  console.log('onInputBlur ~ event', event.currentTarget.value.length);
}
