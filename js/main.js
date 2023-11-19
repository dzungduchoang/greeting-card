 let write_name = document.getElementById("write-name");
 write_name.addEventListener("focus", function () {
     write_name.removeAttribute('placeholder');
 });

 write_name.addEventListener("blur", function () {
     write_name.setAttribute('placeholder', 'Viết tên bạn');
 });

 let form = document.querySelector("form");
 let active = false;
 form.addEventListener('submit', function (e) {
     if (write_name.value !== '') {
         messages[1] = write_name.value;
         stopClick = false;
         active = true;
         let sound = new Audio("sounds/firework-sound.mp3");
         sound.play();
         let secondSound = new Audio("sounds/happy-birthday-sound.mp3");
         secondSound.play();
         cake.click();
     } else {
         let error = document.querySelector('.description p');
         error.style.display = "block";
     }
     e.preventDefault();
 });

 let cake = document.querySelector('img');
 let stopClick = true;
 cake.addEventListener('click', () => {
     if (!stopClick) {
         document.querySelector('.description').style.display = "none";
         document.querySelector('.content').style.display = "block";
         typing(messIndex);
     }
     stopClick = true;
 });