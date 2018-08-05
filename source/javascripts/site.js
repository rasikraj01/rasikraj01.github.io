const projects = document.getElementById('projects');
const sidebar = document.querySelectorAll('.sidebar');
const social_media = document.querySelectorAll('.social-media');
const view_1 = document.querySelectorAll('.view-1');

projects.addEventListener('click', () => {

   sidebar[0].classList.add('sidebar-off');
   social_media[0].classList.add('social-media-off');
   view_1[0].classList.add('view-1-off');
   const li = document.querySelectorAll('.sidebar ul li');
   li.forEach(key => {key.style.display = 'none';})

   setTimeout(() => {
      social_media[0].style.display = 'none';
      view_1[0].style.display = 'none';
   }, 500);
})
