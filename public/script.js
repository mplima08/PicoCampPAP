let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

/* Script GALERIA*/

sideMenu.onclick = () =>{
   sideMenu.classList.toggle('fa-times');
   sideBar.classList.toggle('active');
};

let galleryImages = document.querySelectorAll('.image-container');
let imagePop = document.querySelector('.image-popup');

galleryImages.forEach(img =>{
   img.onclick = () =>{
      let imageSrc = img.getAttribute('src');
      imagePop.style.display = 'flex';
      imagePop.querySelector('img').src = imageSrc;
   };
});

imagePop.onclick = () =>{
   imagePop.style.display = 'none';
};

let categoryBtn = document.querySelectorAll('.category .btn');

categoryBtn.forEach(btn =>{
   btn.onclick = () =>{
      categoryBtn.forEach(remove => remove.classList.remove('active'));
      let dataCategory = btn.getAttribute('data-category');
      galleryImages.forEach(img =>{
         var imgCat = img.getAttribute('data-cat');
         if(dataCategory == 'all'){
            img.style.display = 'block';
         }else if(dataCategory == imgCat){
            img.style.display = 'block';
         }else{
            img.style.display = 'none';
         }
      });
      btn.classList.add('active');
   };
});

let typeBtn = document.querySelectorAll('.type .btn');

typeBtn.forEach(btn =>{
   btn.onclick = () =>{
      typeBtn.forEach(remove => remove.classList.remove('active'));
      let datatype = btn.getAttribute('data-type');
      galleryImages.forEach(img =>{
         var imgtype = img.getAttribute('src').split('.').pop();
         if(datatype == 'all'){
            img.style.display = 'block';
         }else if(datatype == imgtype){
            img.style.display = 'block';
         }else{
            img.style.display = 'none';
         }
      });
      btn.classList.add('active');
   };
});

document.querySelector('.reset-btn .btn').onclick = () =>{
   window.location.reload();
};

/* Script GALERIA*/