const o=new IntersectionObserver(e=>{e.forEach(i=>{if(i.isIntersecting){i.target.classList.add('vis');o.unobserve(i.target)}})},{threshold:0.06,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv').forEach(el=>o.observe(el));
const n=document.getElementById('nav');
const backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>{
  n.classList.toggle('scrolled',scrollY>60);
  backTop.classList.toggle('show',scrollY>800);
});
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('.nav-links a').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'})})});

// Mobile nav
const navOverlay=document.getElementById('navOverlay');
const navToggle=document.getElementById('navToggle');
const navClose=document.getElementById('navClose');
navToggle.addEventListener('click',()=>navOverlay.classList.add('open'));
navClose.addEventListener('click',()=>navOverlay.classList.remove('open'));
navOverlay.querySelectorAll('a').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();navOverlay.classList.remove('open');setTimeout(()=>document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'}),300)})});