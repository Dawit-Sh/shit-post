function Darkmode() {
window.alert("Don't be a pussy use WHITE MODE");
}
function EndIt(){
  const popup = window.open('techiw.png', 'popup', 'width=400,height=300');
}
function RunAway(event) {
      const button = event.target;
      const buttonRect = button.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const offsetX = mouseX - buttonRect.left - buttonRect.width / 15;
      const offsetY = mouseY - buttonRect.top - buttonRect.height / 45;
      const transformX = offsetX * 10;
      const transformY = offsetY * 0.9;
      button.style.transform = `translate(${transformX}px, ${transformY}px)`;
    }
const playButton = document.getElementById('HiTler');
    const audioPlayer = document.getElementById('audioPlayer');
    playButton.addEventListener('click', function() {
      audioPlayer.play();
    });
 const form = document.getElementById('painForm');
  form.addEventListener('mouseover', function() {
    alert('Pleb Trying to move around');
  });
  form.addEventListener('input', function() {
    alert('Pleb is typing in the form! 🤣');
  });
function HabibiCat() {
  const popup = window.open('HBcat.png', 'popup', 'width=400,height=300');
  if (popup) {
    popup.focus();
  } else {
    alert('Habibi Cat Wants to throw wisdom unto thee.');
  }
}
setInterval(HabibiCat, 3000); 
