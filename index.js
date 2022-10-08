const album = [
    {
      id: 1,
      title: "Whola Lotta Red",
      category: "rap",
      rate: 5,
      img: "./images/wlr.jpg",
      desc: `Whole Lotta Red is album by Playboi Carti. The album consists of 24 tracks and features guest appearances from Kanye West. `,
    },
    {
      id: 2,
      title: "Starz",
      category: "trap",
      rate: 5,
      img: "./images/starz.jpg",
      desc: `Starz is the fourth studio album by Swedish rapper and singer Yung Lean. It was released on May 15, 2020.`,
    },
    {
      id: 3,
      title: "Blonde",
      category: "pop",
      rate: 4.5,
      img: "./images/blonde.jpg",
      desc: `Blonde is the second studio album by american singer Frank Ocean. It was released on August 20, 2016 by record label Boys Don't Cry.`,
    },
    {
      id: 4,
      title: "Matrix EP",
      category: "glitchcore",
      rate: 4,
      img: "./images/southstar.webp",
      desc: `Ep released by Southstar on 12th of June 2022, contains 3 tracks and 1 remix. `,
    },
    {
      id: 5,
      title: "Donda",
      category: "rap",
      rate: 4.5,
      img: "./images/donda.webp",
      desc: `Donda is the tenth studio album by American rapper Kanye West, released through GOOD Music on August 29, 2021.`,
    },
    {
      id: 6,
      title: "Trash Island",
      category: "drain",
      rate: 5,
      img: "./images/western.jpg",
      desc: `Trash Island dropped on September 11th, 2019. It is the third collaborative project by Drain Gang.`,
    },
    {
      id: 7,
      title: "Eternal Atake",
      category: "trap",
      rate: 3.75,
      img: "./images/eternal.jpg",
      desc: `Eternal Atake is the second studio album by American rapper Lil Uzi Vert. It is their first project since their 2017 studio album Luv Is Rage 2.`,
    },
    {
      id: 8,
      title: "NOSTYLIST",
      category: "trap",
      rate: 3.5,
      img: "./images/nostylist.jpg",
      desc: `No Stylist is the debut studio album by American rapper Destroy Lonely, released through Opium on August 12, 2022.`,
    },
    {
      id: 9,
      title: "Ice Dancer",
      category: "drain",
      rate: 6,
      img: "./images/ice-dancer.jpg",
      desc: `Icedancer is the third mixtape by Bladee and his ninth project. The album was executively produced by RipSquad and Lusi`,
    },
    {
      id: 10,
      title: "Predictible",
      category: "glitchcore",
      rate: 3.8,
      img: "./images/predictible.jpg",
      desc: `Aldns first release under SIMPLE STUPID RECORDS & GOOD LUCK HAVE FUN.`,
    },
  ];
  const sectionCenter = document.querySelector('.section-center')
  const container = document.querySelector('.btn-container')
  
  window.addEventListener('DOMContentLoaded', function(){
    displayAlbumItems(album)
    displayAlbumBtns()
  })
  
  function displayAlbumItems(albumItems){
    let displayAlbum = albumItems.map(function(item){
      return `
        <article class="album-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="rate">☆${item.rate}</h4>
          </header>
        <p class="item-text">${item.desc}</p>
        </div>
        </article>
        `
    })
    displayAlbum = displayAlbum.join("")
    sectionCenter.innerHTML = displayAlbum
  }
  
  function displayAlbumBtns(){
    const categories = album.reduce(function(values,item){
      if(!values.includes(item.category)){
        values.push(item.category)
      }
    return values
    }, ['all'])
    const categoryBtn = categories.map(function(category){
      return `
        <button class="filter-btn" type="button" data-id=${category}>
          ${category}
        </button>
        `
    }).join("")
    container.innerHTML = categoryBtn
    const filterBtns = container.querySelectorAll('.filter-btn')
    filterBtns.forEach(function (btn){
      btn.addEventListener("click", function(event){
        const category = event.currentTarget.dataset.id
        const menuCategory = album.filter(function(albumItem){
          if(albumItem.category === category){
            return albumItem
          }
        })
        if(category === 'all'){
          displayAlbumItems(album)
        }
        else{
          displayAlbumItems(menuCategory)
        }
      })
    })
  }
