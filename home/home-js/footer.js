fetch('/home/json/bfkCoofcollection.json')
     .then(response => response.json())
     .then(data => {
          footerSection(data);
})

function footerSection(data) {
     // Men's Collections
     let mTopWearData = data.topWear;
     let mBottomWearData = data.bottomWear;
     let mFeaturesBfkData = data.mFeatured;

     const mensCollectionContainer = document.querySelector('.mens-clothing')

     const mTopWearCollections = bewkoofCollection('.topWear-collections', mTopWearData, "Men's", "text-transform-none")
     const mBottomWearCollections = bewkoofCollection('.bottomWear-collections', mBottomWearData, "Men's", "text-transform-none")
     const mFeatureCollections = bewkoofCollection('.features-collections', mFeaturesBfkData, "", "text-transform-none")

     mensCollectionContainer.append(mTopWearCollections)
     mensCollectionContainer.append(mBottomWearCollections)
     mensCollectionContainer.append(mFeatureCollections)


     // Women's Collections

     let wTopWearData = data.topWear;
     let wBottomWearData = data.bottomWear;
     let wFeaturesBfkData = data.wFeatured;
     let wBagData = data.bags;

     const womensCollectionContainer = document.querySelector('.womens-clothing')

     const wTopWearCollections = bewkoofCollection('.womens-topWear-collections', wTopWearData, "Womens's", "text-transform-none")
     const wBottomWearCollections = bewkoofCollection('.womens-bottomWear-collections', wBottomWearData, "Womens's", "text-transform-none")
     const wBagCollections = bewkoofCollection('.womens-bag-collections', wBagData, "", 'text-transform-none')
     const wFeatureCollections = bewkoofCollection('.womens-bag-collections', wFeaturesBfkData, "Womens", "text-transform-none")

     womensCollectionContainer.append(wTopWearCollections)
     womensCollectionContainer.append(wBottomWearCollections)
     womensCollectionContainer.append(wBagCollections)
     womensCollectionContainer.append(wFeatureCollections)

     // Mobile Covers

     let coversCollections = data.mobileCovers;

     const coversCollectionContainer = document.querySelector('.mobile-covers')

     const mobileCoversCollections = bewkoofCollection('.mobile-covers-collections', coversCollections, "", "text-transform-none")

     coversCollectionContainer.append(mobileCoversCollections)

     let successData = data.success;
     const successContainer = document.querySelector('.success')
     const successDiv = document.createElement('div');

     successData.forEach(ele => {
          let ancher = document.createElement('a');
          const successH4 = document.createElement('h4');
          successH4.classList.add('font16px')
          successH4.classList.add('uppercase')
          successH4.classList.add('success-color')
          successH4.classList.add('mr-20px')

          successH4.innerHTML = ele.collections;
          ancher.href = ele.location;
          ancher.append(successH4);
          successDiv.append(ancher);

     })
     successContainer.append(successDiv)
}
