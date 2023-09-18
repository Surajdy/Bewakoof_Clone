
fetch('/home/json/small-card.json')

  .then(response => response.json())
  .then(data => {

    const imageData = data.smallCardData
    // console.log(imageData)

    // containers
    let smallCardContainer = document.querySelector('.small-card-section')


    // Adding data in the container
    imageData.forEach(ele => {
       // Todo! link url
      let anchor = document.createElement('a');
      anchor.href = '#'
      let li = document.createElement('li');
      let smallImage = document.createElement('img');
      let txtDis = document.createElement('p');

      // console.log(ele)
      smallImage.src = ele.image_url;
      txtDis.innerHTML = ele.smallDescription
      li.appendChild(smallImage)
      li.appendChild(txtDis)
      anchor.appendChild(li);
      smallCardContainer.appendChild(anchor)
    })

    // Trending Categories Images
    const trendingCategoriesContainer = document.querySelector('.trending-categories-images')
    const categoriesContainer = document.createElement('div');
    categoriesContainer.classList.add('grid6-1fr')
    const trendingCategories = data.trendingCategories;

    trendingCategories.forEach(ele =>{
       // Todo! link url
      let anchor = document.createElement('a');
      anchor.href = '#'
      const image = document.createElement('img');
      image.classList.add('image100width')
      image.src = ele
      image.alt = 'Tranding Categories'
      anchor.appendChild(image)
      categoriesContainer.append(anchor);
      trendingCategoriesContainer.append(categoriesContainer)
    })

    // Categories to Bag
    const categoriesToContainer = document.querySelector('.categories-to-bag')
    const categoriesBag = document.createElement('div');
    categoriesBag.classList.add('grid6-1fr')
    const categoriesToBag = data.categoriesToBag;

    categoriesToBag.forEach(ele =>{
      // Todo! link url
      let anchor = document.createElement('a');
      anchor.href = '#'
      const image = document.createElement('img');
      image.classList.add('image100width')
      image.src = ele
      image.alt = 'Tranding Categories'

      anchor.append(image);
      categoriesBag.append(anchor);
      categoriesToContainer.append(categoriesBag)
    })

    // Top Accessories
    const topAccessories = data.topAccessories;
    const topAccessoriesContainer = document.querySelector('.top-accessories')
    const accessories = document.createElement('div');
    accessories.classList.add('grid4-1fr')

    topAccessories.forEach(ele =>{
       // Todo! link url
      let anchor = document.createElement('a');
      anchor.href = '#'
      const image = document.createElement('img');
      image.classList.add('image100width')
      image.src = ele
      image.alt = 'Tranding Categories'

      anchor.append(image);
      accessories.append(anchor);
      topAccessoriesContainer.append(accessories)
    })

    // Best Sellers

    const bestSellersCard = data.bestSellersCard;

    // console.log(bestSellersCard)

    
    let bestSellersContainer = document.querySelector('.thirdSwiperSlider');
    let sellersCard = document.querySelector('.thirdSwiper');

    bestSellersCard.forEach((ele,index)=>{
      // let swiperSlide = document.createElement('div');
      // card.classList.add('swiper-slide')

      let card = document.createElement('div');
      card.classList.add('swiper-slide')
      card.setAttribute('id', 'bestSellerCard')
      card.classList.add('img100px-radius-all4')

      let image = document.createElement('img');
      image.classList.add('img100px')
      image.classList.add('img100px-radius-4')
    

      let productDetails = document.createElement('div');
      productDetails.classList.add('producDetails');
      // productDetails.classList.add('producDetails');
      // productDetails.style.paddingTop = '5px'

      let dFlex = document.createElement('div');
      dFlex.classList.add('d-flex')
      dFlex.classList.add('d-flex-between')

      // One Section of the card start
      let producName = document.createElement('div');
      producName.classList.add('product-name');

      let siteName = document.createElement('h3');
      siteName.classList.add('font12px')
      siteName.classList.add('bfk-black')

      siteName.classList.add('right8px')

      let superScript = document.createElement('sup')

      siteName.innerHTML = `Bewakoof`
      superScript.innerHTML = ` &#174;`
      siteName.appendChild(superScript);



      let producDisc = document.createElement('h2');
      producDisc.classList.add('font10px')
      producDisc.classList.add('shade-gray')

      producDisc.classList.add('right8px')
      producDisc.classList.add('top4px')

      producDisc.innerHTML = ele.description;

      producName.appendChild(siteName);
      producName.appendChild(producDisc);

      let likeHeart = document.createElement('i');
      likeHeart.classList.add('fa-regular')
      likeHeart.classList.add('fa-heart')

      dFlex.append(producName,likeHeart);
      // One Section of the card end


      //  second Section of the card start

      let productPriceBox = document.createElement('div');
      productPriceBox.classList.add('productPriceBox')
      productPriceBox.classList.add('d-flex')
      // productPriceBox.classList.add('debug')
      productPriceBox.classList.add('mr-8px')
      productPriceBox.classList.add('pd5px')
      

      let discountedPrice = document.createElement('div');
      discountedPrice.classList.add('discountedPrice')
      discountedPrice.classList.add('p-balck')
      discountedPrice.classList.add('font16px')

      discountedPrice.classList.add('font-weight-6')

      let priceWithR = document.createElement('span')
      priceWithR.classList.add('font16px')
      priceWithR.innerHTML = `&#x20B9;`;

      discountedPrice.appendChild(priceWithR);
      discountedPrice.innerHTML = `&#x20B9; ${ele.discountedPrice}`;
      

      let actualPriceText = document.createElement('div');
      actualPriceText.classList.add('actualPriceText')
      actualPriceText.classList.add('shade-gray')
      actualPriceText.classList.add('font12px')
      actualPriceText.classList.add('left5px')
      actualPriceText.classList.add('top4px')
      actualPriceText.classList.add('line-through-text')
      
      actualPriceText.innerHTML = `&#x20B9;${ele.actualPrice}`

      let discountPresent = document.createElement('div');
      discountPresent.classList.add('discountPresent')
      discountPresent.classList.add('discount-green')
      discountPresent.classList.add('font12px')
      discountPresent.classList.add('left5px')
      discountPresent.classList.add('top4px')

      discountPresent.innerHTML = ele.discountPercent

      productPriceBox.append(discountedPrice, actualPriceText,discountPresent);

      productDetails.append(dFlex,productPriceBox);

      image.src = ele.image_url;
      card.append(image,productDetails);
     
      sellersCard.append(card)
      
    })
    bestSellersContainer.append(sellersCard)

  })


  var swiper = new Swiper('.thirdSlider', {
    slidesPerView: 2,
    spaceBetween: 35,
    loop: false,
    loopedSlides: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Define responsive breakpoints
      1280: {
        slidesPerView: 5, // Show 3 cards when viewport width is 990px or less
      },
      950: {
        slidesPerView: 4, // Show 3 cards when viewport width is 990px or less
      },
      675: {
        slidesPerView: 3, // Show 3 cards when viewport width is 990px or less
      },
    },
    autoplay: {
      delay: 2000, // Auto-play delay in milliseconds (2.5 seconds)
      disableOnInteraction: false, // Enable auto-play even when the user interacts with the slider
    },
  });