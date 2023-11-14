const f11seg1 = document.querySelector(".frame11-seg1");
const f11seg2 = document.querySelector(".frame11-seg2");
const f12seg1 = document.querySelector(".frame12-seg1");
const f12seg2 = document.querySelector(".frame12-seg2");
const qr1     = document.querySelector('.Qr1');
const qr2     = document.querySelector('.Qr2');
const list    = document.querySelector('.about');


const arrow = document.querySelectorAll('.arrow')
f11seg1.addEventListener('mouseover',function(e){
       arrow[0].style.transform = 'translateX(0.5rem)'
    })
f11seg1.addEventListener('mouseout',function(){
     arrow[0].style.transform = 'translate(-0.5rem)'
})
f11seg2.addEventListener('mouseover',function(e){
    arrow[1].style.transform = 'translateX(0.5rem)'
 })
f11seg2.addEventListener('mouseout',function(){
  arrow[1].style.transform = 'translate(-0.5rem)'
})

f12seg1.addEventListener('mouseover',function(e){
    arrow[2].style.transform = 'translateX(0.5rem)'
 })
f12seg1.addEventListener('mouseout',function(){
  arrow[2].style.transform = 'translate(-0.5rem)'
})

f12seg2.addEventListener('mouseover',function(e){
    arrow[3].style.transform = 'translateX(0.5rem)'
 })
f12seg2.addEventListener('mouseout',function(){
  arrow[3].style.transform = 'translate(-0.5rem)'
})

qr1.addEventListener('mouseover',function(e){
    arrow[4].style.transform = 'translateX(0.5rem)'
 })
qr1.addEventListener('mouseout',function(){
  arrow[4].style.transform = 'translate(-0.5rem)'
})

qr2.addEventListener('mouseover',function(e){
    arrow[5].style.transform = 'translateX(0.5rem)'
 })
qr2.addEventListener('mouseout',function(){
  arrow[5].style.transform = 'translate(-0.5rem)'
})
let x = 0
list.addEventListener('click',function(){
  const list_items = document.querySelector('.select-list');
  if(!x){
    list_items.style.display = "flex"
    x = 1
  }
  else{
    list_items.style.display = "none"
    x =0
  }
  list_items.addEventListener('click',function(e){
      list_items.style.display = "none"
       x = 0
  })

})

navList = document.querySelector('.smbar');
navList.addEventListener('click',function(){
  navList.classList.toggle('get');
nav = document.querySelector('.nav-sm');
nav.classList.toggle('nav-motion');

})

AboutSm = document.querySelector('.about-sm');
AboutSm.addEventListener('click',function(){
  if(!x){
  document.querySelector('.about-sm-list').style.display = 'none';
    x = 1
  }
  else{
  document.querySelector('.about-sm-list').style.display = 'flex';
    
    x =0
  }
})


