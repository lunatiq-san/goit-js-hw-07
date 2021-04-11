const refs = {
  input: document.getElementById('font-size-control'),
  nameLabel: document.getElementById('text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameLabel.style.fontSize = `${+event.currentTarget.value}px`;
}
