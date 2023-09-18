// Tribe Memembership
fetch('/home/json/small-card.json')
  .then(res => res.json())
  .then(data => {
    const tribeOffers = data.tribeOffers;

    const tribeOffersContainer = document.querySelector('.bfk-tribe-offers');
    const tribeContainer = document.createElement('div')
    tribeContainer.classList.add('grid2-1fr')

    const whyTribeContainer = document.querySelector('.whyTribe-items')
    const whyTribe = document.createElement('ul')
    whyTribe.classList.add('top10px')


    tribeOffers.forEach(ele => {
      // Tribe Header
      const card = document.createElement('div');
      const image = document.createElement('img');
      const heading = document.createElement('h5');
      heading.classList.add('font16px')
      heading.classList.add('top4px')
      const subHeading = document.createElement('p');
      subHeading.classList.add('top4px')
      subHeading.classList.add('font12px')

      if (ele.heading !== 'Guaranteed Discounts') {
        image.src = ele.image
        heading.innerHTML = ele.heading
        subHeading.innerHTML = ele.subheading1;
        image.classList.add('width40px')

        card.append(image, heading, subHeading);
        tribeContainer.append(card)
      }

      const li = document.createElement('li');
      li.classList.add('d-flex')
      li.classList.add('pd5px')

      // li.classList.add('align-center')

      const image2 = document.createElement('img');
      image2.classList.add('width30px')
      const heading2 = document.createElement('h5');
      heading2.classList.add('font16px')
      const div = document.createElement('div');
      div.classList.add('pd5px')
      const span = document.createElement('span');

      span.classList.add('text-transform-none')
      span.classList.add('mega-link')
      span.classList.add('d-flex')
      span.classList.add('top4px')

      image2.src = ele.image
      heading2.innerHTML = ele.heading;
      span.innerHTML = ele.subheading2
      div.append(heading2, span);

      li.append(image2, div);
      whyTribe.appendChild(li);
    });
    tribeOffersContainer.append(tribeContainer);
    whyTribeContainer.append(whyTribe);


    // TriBe Swipper

    let triBeCardContainer = document.querySelector('.exclusive-tribe-swipper');
    let triBe = document.querySelector('.tribeSwipper');

    const triBeSwiper = data.exclusiveSaving;

    triBeSwiper.forEach((ele, index) => {
      let tribeCard = document.createElement('div');
      tribeCard.classList.add('swiper-slide')

      let image = document.createElement('img');
      image.classList.add('img100px-radius-4')
      let regularPrice = document.createElement('div');
      regularPrice.classList.add('top4px')
      let tribePrice = document.createElement('div');
      tribePrice.classList.add('font-weight-6')
      tribePrice.classList.add('top4px')
      let saving = document.createElement('div');
      saving.classList.add('discount-green')
      saving.classList.add('top4px')

      image.src = ele.imageUrl
      regularPrice.innerHTML = `Regular Price: ${ele.regularPrice}`
      tribePrice.innerHTML = `TriBe Price: ${ele.tribePrice}`
      saving.innerHTML = `Savings: ${ele.saving}`

      tribeCard.append(image, regularPrice, tribePrice, saving);

      triBe.append(tribeCard);
    })
    triBeCardContainer.append(triBe);
  })

document.addEventListener('DOMContentLoaded', function () {

  var swiper = new Swiper('.exclusive-tribe-swipper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: false,
    loopedSlides: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1280: {
        slidesPerView: 5,
      },
      950: {
        slidesPerView: 4,
      },
      675: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
})
document.addEventListener('DOMContentLoaded', function () {
  const labels = document.querySelectorAll('.accordion li label');
  
  labels.forEach((label) => {
    label.addEventListener('click', () => {
      const answer = label.nextElementSibling;
      answer.classList.toggle('active');
    });
  });
});
