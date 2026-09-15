
function submitDemo(e){
  e.preventDefault();
  const note=document.getElementById('form-note');
  note.textContent='Quote form preview: submission delivery will be connected before launch.';
  note.style.color='#13233b';
  return false;
}
