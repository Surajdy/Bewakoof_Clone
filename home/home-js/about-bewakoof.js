fetch('/home/json/about-bewakoof.json')
.then(responce => responce.json())
.then(data => {
     const aboutBfr = data.aboutBewakoof;

     const aboutBfrDetails = document.querySelector('.footer-items-container');
     const aboutDiv = document.createElement('div');

     aboutBfr.forEach(ele => {
          // console.log(ele)
          const h1 = document.createElement('h1');
          h1.classList.add('font16px')
          h1.classList.add('tb-mar10px')
          h1.classList.add('link-color')
          const p = document.createElement('p');
          p.classList.add('link-color')
          p.classList.add('text-align-justify')

          h1.innerHTML = ele.tagline
          p.innerHTML = ele.discription

          aboutDiv.append(h1,p);
     });
     aboutBfrDetails.append(aboutDiv)
})