const projects = document.getElementById('projects');
const sidebar = document.querySelectorAll('.sidebar');
const social_media = document.querySelectorAll('.social-media');
const view_1 = document.querySelectorAll('.view-1');
const view_2 = document.querySelectorAll('.view-2');
const topbar = document.querySelectorAll('.topbar');

projects.addEventListener('click', () => {

   sidebar[0].classList.add('sidebar-off');
   social_media[0].classList.add('social-media-off');
   view_1[0].classList.add('view-1-off');
   const ul = document.querySelectorAll('.sidebar ul');
   ul.forEach(key => {key.style.display = 'none';})

   setTimeout(() => {
      social_media[0].style.display = 'none';
      view_1[0].style.display = 'none';
   }, 500);
   view_2[0].style.display = 'flex';
   topbar[0].style.display = 'block';
   setTimeout(() => {
      view_2[0].classList.add('view-2-on');
      topbar[0].classList.add('topbar-on');
   }, 700);
})
