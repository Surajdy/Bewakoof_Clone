fetch('/home/json/supportData.json')
     .then(response => response.json())
     .then(data => {

          // Footer First Section
          const customerServices = data.coustomerServics;

          const footerItemsContainer = document.querySelector('.footer-section');

          let customerService = document.querySelector('.customer-service');
          // customerService.classList.add('customer-service')

          customerServices.forEach(ele => {
               // console.log(ele)
               let ul = document.createElement('ul');

               let ancher = document.createElement('a');
               ancher.href = ele.location;

               let li = document.createElement('li');
               li.classList.add('top3px')
               li.classList.add('d-flex')
               li.innerHTML = ele.name;
               // let sep = document.createElement('a');
               // sep.innerHTML = '|'

               ancher.append(li);

               ul.appendChild(ancher);

               customerService.appendChild(ul);
          });

          const companyData = data.company;

          let companyDiv = document.querySelector('.about-company');
          // companyDiv.classList.add('about-company')

          companyData.forEach(ele => {
               // console.log(ele)
               let ul = document.createElement('ul');

               let ancher = document.createElement('a');
               ancher.href = ele.location;

               let li = document.createElement('li');
               li.innerHTML = ele.name;

               ancher.append(li);

               ul.appendChild(ancher);

               companyDiv.appendChild(ul);
          });

          const connectUs = data.connectWithUs;
          // console.log(connectUs)

          let connectWithUs = document.querySelector('.connect-with-us');
          // companyDiv.classList.add('about-company')

          connectUs.forEach(ele => {
               // console.log(ele)
               let ul = document.createElement('ul');

               let ancher = document.createElement('a');
               ancher.href = ele.location;

               let li = document.createElement('li');

               let icon = document.createElement('i');
               icon.classList.add('fa-brands')
               icon.classList.add(ele.iconName)

               let span = document.createElement('span');
               span.classList.add('font12px')
               span.classList.add('link-color')

               span.innerHTML = ele.community;

               li.appendChild(icon);
               li.appendChild(span)

               ancher.append(li);

               ul.appendChild(ancher);

               connectWithUs.appendChild(ul);
          });

          let socialMediaIcons = data.socialMediaIcons;



          socialMediaIcons.forEach(ele => {
               let ancher = document.createElement('a');
               ancher.href = ele.location;
               ancher.target = '_blank'
               ancher.classList.add('right8px')


               let icon = document.createElement('i');
               icon.classList.add('fa-brands')
               icon.classList.add(ele.social)
               ancher.append(icon)
               connectWithUs.append(ancher)
          })

          let upToDate = document.querySelector('.keep-up-to-date');

          let inputEmail = document.createElement('input')
          inputEmail.type = 'email';
          inputEmail.placeholder = `Enter Email Id`
          inputEmail.classList.add('subscribe-email');
         

          let inputBtn = document.createElement('input')
          inputBtn.type = 'button';
          inputBtn.value = `Subscribe`
          inputBtn.classList.add('subscribe-btn');
          inputBtn.classList.add('uppercase');
          inputBtn.classList.add('top4px');

          upToDate.append(inputEmail, inputBtn);


          footerItemsContainer.appendChild(customerService)

          footerItemsContainer.appendChild(companyDiv)

          footerItemsContainer.appendChild(connectWithUs)
          footerItemsContainer.appendChild(upToDate)


          let bfkFeatures = document.querySelector('.bfk-features');


          let bfkPolicy = document.querySelector('.bfk-policy')

          const bfkPolicyData = data.bfkPolicy;

          bfkPolicyData.forEach(ele => {
               
               let li = document.createElement('li');
               // li.classList.add('witdh17_813rem')

               let ancher = document.createElement('a');
               ancher.href = ele.location;

               let icon = document.createElement('i');
               let span = document.createElement('span');
               span.classList.add('link-color')
          
               icon.classList.add('fa-solid');
               icon.classList.add(ele.icon)

               span.innerHTML = ele.policy;

               ancher.append(icon,span);

               li.appendChild(ancher)


               bfkPolicy.append(li);
          })


          const placeToDownload = data.downloadTheApp

          let dwonloadApp = document.querySelector('.download-app');
          let imageContainer = document.querySelector('.imageContainer');

          placeToDownload.forEach(ele=>{
               let ancher = document.createElement('a');
               ancher.href = ele.location;
               ancher.target = `_blank`

               let image = document.createElement('img');
               image.src = ele.place_url;
               image.classList.add('img30per')

               ancher.append(image);
               imageContainer.append(ancher);
               dwonloadApp.append(imageContainer);
          })

          let securePayment = document.querySelector('.secure-paymet');
          let image = document.createElement('img');
          image.src = 'https://images.bewakoof.com/web/secure-payments-image.png';
          image.classList.add('img100px')
          securePayment.append(image);

          // let nothing = document.getElementById('nothing')
          // let nothingDiv = document.createElement('div');
          // nothingDiv.classList.add('witdh17_813rem')
          // nothing.append(nothingDiv);

          bfkFeatures.append(bfkPolicy)
          bfkFeatures.append(dwonloadApp)
          bfkFeatures.append(securePayment)
          // bfkFeatures.append(nothing)



     })