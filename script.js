// toogle
const input = document.getElementById('toggle-input');
const iconsBall = document.getElementById('icons-ball');

let isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
   iconsBall.style.transform = 'translateX(60px)';
  document.body.classList.add('darkstyle');
} else {
  iconsBall.style.transform = 'translateX(0px)';
}

input.addEventListener('click', function(){
  isDarkMode = !isDarkMode;

  requestAnimationFrame(function(){ // Оборачиваем изменения в requestAnimationFrame
    if (isDarkMode) {
      iconsBall.style.transform = 'translateX(60px)';
      document.body.classList.add('darkstyle');
    } else {
      iconsBall.style.transform = 'translateX(0px)';
      document.body.classList.remove('darkstyle');
    }

    localStorage.setItem('darkMode', isDarkMode);
  });
});
// button_project
document.getElementById('button_project').onclick = function(){
  document.getElementById('work').scrollIntoView({
    behavior:'smooth',
    block:'start'
  })
}
// scroll menu-item
const links = document.querySelectorAll(".header_menu_item > a");
for(let i=0; i<links.length; i++){
  links[i].onclick = function(){
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
  }
}

// scroll btn_up
const btnTop = document.getElementById('button_up');

function scrollFunct(){
    if(document.body.scroll>1700 || document.documentElement.scrollTop>1700){
        btnTop.classList.add('show');
    }else{
         btnTop.classList.remove('show');
    }
}
window.onscroll = function() {
    scrollFunct({behavior: "smooth"})
};

function backTop(){
    document.body.scroll = 0;
    document.documentElement.scrollTop = 0;
}
btnTop.addEventListener('click',backTop );

// time
const time = document.querySelector('time');
if(time){
    const currentYear = new Date().getFullYear();

    time.setAttribute('datetime',currentYear.toString());
    time.textContent = currentYear.toString();
}
// tab
const verstbutton = document.getElementById('bt_project button_verst');
const codeButton = document.getElementById('bt_project button_code');

const verstContent = document.getElementById('project_cards_verst');
const codeContent = document.getElementById('project_cards_code');

verstbutton.addEventListener('click', function(){
    verstContent.classList.add('active');
    codeContent.classList.remove('active');
});
codeButton.addEventListener('click', function(){
    verstContent.classList.remove('active');
    codeContent.classList.add('active');
})