fetch('/home/json/bfkCoofcollection.json')
     .then(response => response.json())
     .then(data => {
          megaDropDwonMenu(data);

     })

function bewkoofCollection(refrence, data, gender = "", uppercase = "uppercase", color = 'link-color', font = 'font12px', padding = 'defaultpm', margin = 'defaultpm') {
     const refrenceContainer = document.querySelector(refrence);
     const refrenceUl = document.createElement('ul')

     data.forEach(ele => {
          // console.log(ele);
          let li = document.createElement('li')
          let ancher = document.createElement('a');
          ancher.classList.add(color)
          ancher.classList.add(font)
          ancher.classList.add(padding)
          ancher.classList.add(margin);
          ancher.classList.add(uppercase);
          ancher.classList.add('d-flex')
          
          ancher.href = ele.location;

          if (ele.collections !== "Top Wear" && ele.collections !== "Bottom Wear" && ele.collections !== "All Topwear" && ele.collections !== "Featured") {
               ancher.innerHTML = `${gender} ${ele.collections}`
          } else {
               ancher.innerHTML = ele.collections
               console.log(1);
          }
          li.appendChild(ancher);
          refrenceUl.append(li);
          
     });

     refrenceContainer.append(refrenceUl)
     
     return refrenceContainer ;
}



function megaDropDwonMenu(data) {
     womensMegaDropDwon(data)
     mensMegaDropDwon(data)
     mobileMegaDropDwon(data)
}



function mensMegaDropDwon(data){
     
     // For Mens

     let mTopWearData = data.topWear;
     let innerwearData = data.innerwearAndLoundewear;

     // Column 1
     const colFirstContainer = document.querySelector('.col-1-mega-menu')

     const topWearCollections = bewkoofCollection('.top-wear-mega', mTopWearData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const innerContainer = bewkoofCollection('.Innerwear-longewear', innerwearData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')

     colFirstContainer.append(topWearCollections)
     colFirstContainer.append(innerContainer)

     // Column 2
     let bottomWearData = data.bottomWear;
     let accessoriesData = data.accessories;
     const colSecondContainer = document.querySelector('.col-2-mega-menu')

     const bottomCollections = bewkoofCollection('.bottom-wear-mega', bottomWearData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const accessroiesCollection = bewkoofCollection('.accessories-mega', accessoriesData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')

     colSecondContainer.append(bottomCollections)
     colSecondContainer.append(accessroiesCollection)

     // Column 3

     let winterWearData = data.winterWear;
     let footwearDAta = data.footWear;
     let pluseSizeDAta = data.plusSize;
     const colThirdContainer = document.querySelector('.col-3-mega-menu')

     const winterCollections = bewkoofCollection('.winter-wear-mega', winterWearData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const footCollection = bewkoofCollection('.footwear-mega', footwearDAta, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const pluseCollection = bewkoofCollection('.plus-size-mega', pluseSizeDAta, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')

     colThirdContainer.append(winterCollections)
     colThirdContainer.append(footCollection)
     colThirdContainer.append(pluseCollection)

     // Column 4
     const specialMart = data.specialsDropDwonData;
     const colForthContainer = document.querySelector('.col-4-mega-menu')
     const specialMega = megaDropDwonSpecils(specialMart);
     colForthContainer.append(specialMega)
}

function megaDropDwonSpecils(data) {



     const colForthDiv = document.createElement('div');

     data.forEach(ele => {
          // console.log(ele);
          let ancher = document.createElement('a');
          ancher.classList.add('d-flex')
          const image = document.createElement('img');
          image.classList.add('width40px')
          image.classList.add('d-flex-jcenter')
          image.classList.add('right8px')
          const span = document.createElement('span');
          span.classList.add('text-transform-none')
          span.classList.add('d-block')
          span.classList.add('text-align-strat')
          span.classList.add('mega-link')
          span.setAttribute('id', 'mega-special')

          image.src = ele.image_url;
          span.innerHTML = ele.collection_name;
          ancher.href = ele.location;

          ancher.append(image, span);
          colForthDiv.append(ancher)
          // colForthContainer.append(colForthDiv)
     })
     return colForthDiv;
}

function womensMegaDropDwon(data) {
     let mTopWearData = data.topWear;
     let innerwearData = data.innerwearAndLoundewear;

     let bottomWearData = data.bottomWear;
     let accessoriesData = data.accessories;
     let winterWearData = data.winterWear;
     let footwearDAta = data.footWear;
     let pluseSizeDAta = data.plusSize;

     const specialMart = data.specialsDropDwonData;

     // col-1-mega-menu-women

     const colFirstContainerWomen = document.querySelector('.col-1-mega-menu-women')
     const topWearCollectionsWomen = bewkoofCollection('.top-wear-mega-women', mTopWearData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     colFirstContainerWomen.append(topWearCollectionsWomen)



     // Column 2
     const colSecondContainerWomen = document.querySelector('.col-2-mega-menu-women')

     const bottomCollectionsWomen = bewkoofCollection('.bottom-wear-mega-women', bottomWearData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const accessroiesCollectionWomen = bewkoofCollection('.accessories-mega-women', accessoriesData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const innerContainerWomen = bewkoofCollection('.Innerwear-longewear-women', innerwearData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')

     colSecondContainerWomen.append(bottomCollectionsWomen)
     colSecondContainerWomen.append(accessroiesCollectionWomen)
     colSecondContainerWomen.append(innerContainerWomen)


     const colThirdContainerWomen = document.querySelector('.col-3-mega-menu-women')

     const winterCollectionsWomen = bewkoofCollection('.winter-wear-mega-women', winterWearData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const footCollectionWomen = bewkoofCollection('.footwear-mega-women', footwearDAta, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const pluseCollectionWomen = bewkoofCollection('.plus-size-mega-women', pluseSizeDAta, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')

     colThirdContainerWomen.append(winterCollectionsWomen)
     colThirdContainerWomen.append(footCollectionWomen)
     colThirdContainerWomen.append(pluseCollectionWomen)


     // const specialMart = data.specialsDropDwonData;
     const colForthContainerWomen = document.querySelector('.col-4-mega-menu-women')
     const specialMegaWomen = megaDropDwonSpecils(specialMart);
     colForthContainerWomen.append(specialMegaWomen)
}
function mobileMegaDropDwon(data) {
     // Mobiles Covers


     let nothingData = data.nothing;
     let appleData = data.apple
     let xaimoiData = data.xaimoi
     let samsungData = data.samsung
     let oneplusData = data.oneplusOne
     let realmeData = data.realme
     let vivoData = data.vivo
     let otherData = data.othersBrands;
     // Column 1
     const colFirstCoversContainerCover = document.querySelector('.col-1-mega-menu-popluor')

     const nothingCollections = bewkoofCollection('.nothing-mega-covers', nothingData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     colFirstCoversContainerCover.append(nothingCollections)

     const appleCollections = bewkoofCollection('.apple-mega-covers', appleData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     colFirstCoversContainerCover.append(appleCollections)


     const colSecondCoversContainerCover = document.querySelector('.col-2-mega-menu-covers')


     const xiamoiCollections = bewkoofCollection('.xiomi-mega-covers', xaimoiData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const samsumngCollectionsCollections = bewkoofCollection('.samsung-mega-covers', samsungData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')

     colSecondCoversContainerCover.append(xiamoiCollections)
     colSecondCoversContainerCover.append(samsumngCollectionsCollections)

     const colThirdCoversContainerCover = document.querySelector('.col-3-mega-menu-covers')


     const onePlusCollections = bewkoofCollection('.oneplus-mega-covers', oneplusData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const realmeCollectionsCollections = bewkoofCollection('.realme-mega-covers', realmeData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')
     const vivoCollectionsCollections = bewkoofCollection('.vivo-mega-covers', vivoData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')

     colThirdCoversContainerCover.append(onePlusCollections)
     colThirdCoversContainerCover.append(realmeCollectionsCollections)
     colThirdCoversContainerCover.append(vivoCollectionsCollections)

     const colForthCoversContainerCover = document.querySelector('.col-4-mega-menu-covers')

     const othersCollectionsCollections = bewkoofCollection('.other-brand-covers', otherData, "", "text-transform-none", 'mega-link', 'font12px', 'pd-0-30-0-0px', 'mr-12px')


     const seeAllDevices = document.createElement('a');
     seeAllDevices.href = '#'
     seeAllDevices.innerHTML = "See all devices"
     seeAllDevices.classList.add('success-color')
     seeAllDevices.classList.add('text-transform-none')
     seeAllDevices.classList.add('underline-text')

     colForthCoversContainerCover.append(othersCollectionsCollections, seeAllDevices)


     let ancher = document.createElement('a');
     ancher.href = '#';
     let image = document.createElement('img')
     image.src = 'https://images.bewakoof.com/nav_menu/bewakoof-online-fashion-COTM-mobile-cover-navigation-box-desktop-1612275399.jpg'
     image.style.width = '146.6px'
     image.style.height = '219.6px'
     ancher.classList.add('position-abs')

     ancher.append(image);

     const forImage = document.querySelector('.for-image-covers');
     forImage.append(ancher)
}