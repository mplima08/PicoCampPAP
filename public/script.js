let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
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


let popup = document.querySelector('.image-popup');

popup.onclick = () =>{
  popup.style.display = 'none';
};

let images = document-querySelectorAll('.image-container img');

images.forEach(img=>{
  img.onclick = () =>{
    var imgSrc = img.getAttribute('src');
    popup.style.display = 'flex';
    popup.querySelector('img').src = imgSrc;
  }
});


let galeriaImages = document.querySelectorAll('.image-container');
let imagePop = document.querySelector('.image-popup');

galeriaImages.forEach(img =>{
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
//Script da pagina contacto
function enviarContactos(){
   let pn = document.getElementById('contact-PrimNome').value
   let un = document.getElementById('contact-UltNome').value
   let email = document.getElementById('contact-email').value
   let telem= document.getElementById('contact-telem').value
   let msg = document.getElementById('contact-menssagem').value
 /*  
         if(telem.length >=10 && telem.lenght <9 ){
           alert('insira um número válido')
         }
         else {
           let i = 0
           for(i; i<telem.length; i++){
               let c = telem.charAt(i)
               console.log(c)
               if(isNaN(c)){
                   alert('numero invalido')
                   break
               }       
           }
           console.log(i)
           if(i == telem.length){
               const telemInt = parseInt(telem)
               console.log(telemInt)
           }
           
         }
 
 */ 
         if(pn == ''||un == ''||email==''|| msg=='' || telem==''){
               alert('Preencha todos os Campos!!')
         }else{

                 let data = {
                   PrimNome: pn,
                   UltNome: un,
                   Email: email,
                   Telem: telem,
                   Mensagem: msg
                 }
                 
                  let d = JSON.stringify(data)
                 console.log(d)
                 const options = {
                   method:'POST',
                   headers: {
                     'Content-type': 'application/json'
                   },
                   body: d
                 }
                 fetch('http://localhost:4000/contactos',options)
                 .then(res => res.json())
                 .then(res => alert(res.text))
                 .catch((err) => {
                   console.log('Request failed', err.msg)
                 });
 
           }  
   
 }