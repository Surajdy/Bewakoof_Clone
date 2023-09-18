fetch('/home/json/big-images.json')

     .then(response => response.json())
     .then(data => {
          // Of the Week
          const designOfWeek = data.designOfTheWeek
          const designOfTheWeekContainer = document.querySelector('.design-of-the-week');
          const imageContainer = document.createElement('div');
          imageContainer.classList.add('grid2-1fr')
          designOfWeek.forEach(ele => {

               
                // Todo! link url
               const ancher = document.createElement('a');
               ancher.href = '#'

               const weekImage = document.createElement('img');
               weekImage.classList.add('image100width')
               weekImage.src = ele;
               weekImage.alt = 'design of the week'
               ancher.appendChild(weekImage)
               imageContainer.append(ancher)
               designOfTheWeekContainer.append(imageContainer)
          });


          const toHotToBeMissed = document.querySelector('.hot-to-be-missed');
          const MissedContainer = document.createElement('div');
          MissedContainer.classList.add('grid2-1fr')
          const tooBeMissed = data.tooBeMissed;

          tooBeMissed.forEach(elem => {
               // Todo! link url
               let ancher = document.createElement('a');
               ancher.href = '#'
               const missedImage = document.createElement('img');
               missedImage.classList.add('image100width')
               missedImage.src = elem;
               missedImage.alt = 'Too Hot To Be Missed'
               ancher.appendChild(missedImage)
               MissedContainer.append(ancher)
               toHotToBeMissed.append(MissedContainer)
          });

          const ourBestPicksData = data.ourBestPicks;
          const ourBestPicksContainer = document.querySelector('.our-best-picks');
          const picksContainer = document.createElement('div');
          picksContainer.classList.add('grid2-1fr')
          picksContainer.classList.add('gap-r0-c5')

          ourBestPicksData.forEach(elem => {
               // Todo! link url
               let ancher = document.createElement('a');
               ancher.href = '#'

               const image = document.createElement('img');
               image.classList.add('image100width')
               image.src = elem;
               image.alt = 'Too Hot To Be Missed'
               ancher.appendChild(image)
               picksContainer.append(ancher)
               ourBestPicksContainer.append(picksContainer)
          });

     })