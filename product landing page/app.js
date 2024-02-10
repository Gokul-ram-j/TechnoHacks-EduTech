
let product_img_src_link=["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-128.gif?v=1698294147","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_161.gif?v=1698294147","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-141.gif?v=1698293993","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ezgif-1-6381642bb4.gif?v=1685013470","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_171.jpg?v=1689670793","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_131.gif?v=1698386535",
"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Alpha.jpg?v=1688452927","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/191G_1.gif?v=1686650191","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_441_ANC.jpg?v=1686297917","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-190.gif?v=1698293994",
"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_1.gif?v=1686650188","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_111.jpg?v=1706776330"
]
let superhero_collection_product_img_src_link=["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes-131-DC-Edition.jpg?v=1682576552","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD131_Black-panther.jpg?v=1688452928","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131-iron-man.jpg?v=1688452928","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_131_Wonder_Woman_229ba076-9c75-4d29-98ad-189530b7302d.jpg?v=1688452927",]
let wired_earphones_img_src=["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bassheads_104.jpg?v=1699501201","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bassheads_225.jpg?v=1700300890","//www.boat-lifestyle.com/cdn/shop/products/Red_d8ee4785-21ae-4fee-943e-d5c571131ae8_300x.png?v=1660654082","//www.boat-lifestyle.com/cdn/shop/products/main2_f295a600-2857-4ff8-940c-3873fc2f1367_300x.png?v=1645015211",
"//www.boat-lifestyle.com/cdn/shop/products/e5839562-1b21-4e3f-965c-741cf758a335_300x.png?v=1625046391","//www.boat-lifestyle.com/cdn/shop/products/nirvana-duo_300x.png?v=1613742913","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bassheads_103.jpg?v=1700300880","//www.boat-lifestyle.com/cdn/shop/products/fature_images_300x.png?v=1613457233"]

let gaming_headphones_img_src=["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_400.gif?v=1691387449","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/immortal_1300.gif?v=1691387451","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-450-Batman-DC-Edition.jpg?v=1682579854","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_700_35baa2dd-cf19-4eab-8df3-c79ae962fb85.jpg?v=1699501201",
"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_200.psb.jpg?v=1699501201","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_300.webp?v=1700806009"]
// product details

let allSpec=["13mm drivers","IWP Technology","clear calling","Asap Charge","BEAST Mode","Smart touch control","ENx Technology","Bluetooth v5.3","IPX7 Water Resistance","upto 40HRS playback",]

let carousel_elem_container=document.querySelector(".slide-track")
for(i=1;i<=10;i++){
    let carousel_elem=`
                        <div class="slide">
                            <img src="./assests/logo${i}.jpg" height="100" width="250" alt="" />
                        </div>
                     `
    carousel_elem_container.innerHTML+=carousel_elem
}

for(src of product_img_src_link){
    let specs=[]
    for(i=0;i<4;i++){
        const spec = allSpec[Math.floor(Math.random() * allSpec.length)];
        specs.push(spec)
    }
    const rating_star = Math.floor(Math.random() * 5);
    const verified_user =Math.floor(Math.random() * 1000);
    const actual_price = Math.round(Math.random() * (2500 - 1000) + 1000);
    const discounted_price = Math.round(Math.random() * (1500 - 1000) + 1000);
    // const discount=(Math.round(((actual_price - discounted_price)/discounted_price)*100))
    // console.log(specs,rating_star,verified_user,actual_price,discounted_price,discount,src)
    let product_elem=`
    <div class="item">
        <button class="closed" onclick="showoption(this)"><img src="./assests/shoppingcart.png" alt=""></button>
        <div class="purchasediv">
          <div class="purchasediv-btn-group">
            <button>purchase</button>
            <button>Add Cart</button>
            <button>Wishlist</button>
          </div>
        </div>
        <div class="item-img">
          <img src=${src} alt="" >
          <p>60 Hours Playback</p>
        </div>
        <div class="item-context">
          <div class="detail1">
            <img src="./assests/star.png" alt="" width="19px" height="19px">
            <p>${rating_star}</p>
            <img src="./assests/check.png" alt="" width="19px" height="19px">
            <p>${verified_user}</p>
           
          </div>
          <h1>Airdopes 381</h1>
          <div class="detail2">
            <p>${specs[0]}</p>
            <p>${specs[1]}</p>
            <p>${specs[2]}</p>
            <p>${specs[3]}</p>
          </div>
          <img src="./assests/flipkartlogo.png" alt="" width="100px" height="70px">
          <img src="./assests/amazonlogo.png" alt="" width="100pxpx" height="50px">
          <h2><span class="discountedprice">&#8377 ${discounted_price}</span><span class="actualprice">&#8377 ${actual_price}</span></h2>
          </div>
          </div>
          `
          document.querySelector(".product-container1").innerHTML+=product_elem
          // <h2><span class="offerpercentage">${discount} off</span></h2>
}

function showoption(elem){
    if(elem.classList.contains("closed")){
      elem.parentElement.querySelector(".purchasediv").style.display="block"
      elem.classList.remove("closed")
      elem.classList.add("opened")
      elem.querySelector("img").setAttribute("src","./assests/close.png")
    }
    else{
      elem.parentElement.querySelector(".purchasediv").style.display="none"
      elem.classList.remove("opened")
      elem.classList.add("closed")
      elem.querySelector("img").setAttribute("src","./assests/shoppingcart.png")
    }
}



// superhero tws
for(src of superhero_collection_product_img_src_link){
  let specs=[]
  for(i=0;i<4;i++){
      const spec = allSpec[Math.floor(Math.random() * allSpec.length)];
      specs.push(spec)
  }
  const rating_star = Math.floor(Math.random() * 5);
  const verified_user =Math.floor(Math.random() * 1000);
  const actual_price = Math.round(Math.random() * (2500 - 1000) + 1000);
  const discounted_price = Math.round(Math.random() * (1500 - 1000) + 1000);
  // const discount=(Math.round(((actual_price - discounted_price)/discounted_price)*100))
  // console.log(specs,rating_star,verified_user,actual_price,discounted_price,discount,src)
  let product_elem=`
  <div class="item">
      <button class="closed" onclick="showoption(this)"><img src="./assests/shoppingcart.png" alt=""></button>
      <div class="purchasediv">
        <div class="purchasediv-btn-group">
          <button>purchase</button>
          <button>Add Cart</button>
          <button>Wishlist</button>
        </div>
      </div>
      <div class="item-img">
        <img src=${src} alt="" >
        <p>60 Hours Playback</p>
      </div>
      <div class="item-context">
        <div class="detail1">
          <img src="./assests/star.png" alt="" width="19px" height="19px">
          <p>${rating_star}</p>
          <img src="./assests/check.png" alt="" width="19px" height="19px">
          <p>${verified_user}</p>
         
        </div>
        <h1>Airdopes 381</h1>
        <div class="detail2">
          <p>${specs[0]}</p>
          <p>${specs[1]}</p>
          <p>${specs[2]}</p>
          <p>${specs[3]}</p>
        </div>
        <img src="./assests/flipkartlogo.png" alt="" width="100px" height="70px">
        <img src="./assests/amazonlogo.png" alt="" width="100pxpx" height="50px">
        <h2><span class="discountedprice">&#8377 ${discounted_price}</span><span class="actualprice">&#8377 ${actual_price}</span></h2>
        </div>
        </div>
        `
        document.querySelector(".product-container2").innerHTML+=product_elem
        // <h2><span class="offerpercentage">${discount} off</span></h2>
}

// wired headphones
for(src of wired_earphones_img_src){
  let specs=[]
  for(i=0;i<4;i++){
      const spec = allSpec[Math.floor(Math.random() * allSpec.length)];
      specs.push(spec)
  }
  const rating_star = Math.floor(Math.random() * 5);
  const verified_user =Math.floor(Math.random() * 1000);
  const actual_price = Math.round(Math.random() * (2500 - 1000) + 1000);
  const discounted_price = Math.round(Math.random() * (1500 - 1000) + 1000);
  // const discount=(Math.round(((actual_price - discounted_price)/discounted_price)*100))
  // console.log(specs,rating_star,verified_user,actual_price,discounted_price,discount,src)
  let product_elem=`
  <div class="item">
      <button class="closed" onclick="showoption(this)"><img src="./assests/shoppingcart.png" alt=""></button>
      <div class="purchasediv">
        <div class="purchasediv-btn-group">
          <button>purchase</button>
          <button>Add Cart</button>
          <button>Wishlist</button>
        </div>
      </div>
      <div class="item-img">
        <img src=${src} alt="" >
        <p>60 Hours Playback</p>
      </div>
      <div class="item-context">
        <div class="detail1">
          <img src="./assests/star.png" alt="" width="19px" height="19px">
          <p>${rating_star}</p>
          <img src="./assests/check.png" alt="" width="19px" height="19px">
          <p>${verified_user}</p>
         
        </div>
        <h1>Airdopes 381</h1>
        <div class="detail2">
          <p>${specs[0]}</p>
          <p>${specs[1]}</p>
          <p>${specs[2]}</p>
          <p>${specs[3]}</p>
        </div>
        <img src="./assests/flipkartlogo.png" alt="" width="100px" height="70px">
        <img src="./assests/amazonlogo.png" alt="" width="100pxpx" height="50px">
        <h2><span class="discountedprice">&#8377 ${discounted_price}</span><span class="actualprice">&#8377 ${actual_price}</span></h2>
        </div>
        </div>
        `
        document.querySelector(".product-container3").innerHTML+=product_elem
        // <h2><span class="offerpercentage">${discount} off</span></h2>
}


// gaming headphones

for(src of gaming_headphones_img_src){
  let specs=[]
  for(i=0;i<4;i++){
      const spec = allSpec[Math.floor(Math.random() * allSpec.length)];
      specs.push(spec)
  }
  const rating_star = Math.floor(Math.random() * 5);
  const verified_user =Math.floor(Math.random() * 1000);
  const actual_price = Math.round(Math.random() * (2500 - 1000) + 1000);
  const discounted_price = Math.round(Math.random() * (1500 - 1000) + 1000);
  // const discount=(Math.round(((actual_price - discounted_price)/discounted_price)*100))
  // console.log(specs,rating_star,verified_user,actual_price,discounted_price,discount,src)
  let product_elem=`
  <div class="item">
      <button class="closed" onclick="showoption(this)"><img src="./assests/shoppingcart.png" alt=""></button>
      <div class="purchasediv">
        <div class="purchasediv-btn-group">
          <button>purchase</button>
          <button>Add Cart</button>
          <button>Wishlist</button>
        </div>
      </div>
      <div class="item-img">
        <img src=${src} alt="" >
        <p>60 Hours Playback</p>
      </div>
      <div class="item-context">
        <div class="detail1">
          <img src="./assests/star.png" alt="" width="19px" height="19px">
          <p>${rating_star}</p>
          <img src="./assests/check.png" alt="" width="19px" height="19px">
          <p>${verified_user}</p>
         
        </div>
        <h1>Airdopes 381</h1>
        <div class="detail2">
          <p>${specs[0]}</p>
          <p>${specs[1]}</p>
          <p>${specs[2]}</p>
          <p>${specs[3]}</p>
        </div>
        <img src="./assests/flipkartlogo.png" alt="" width="100px" height="70px">
        <img src="./assests/amazonlogo.png" alt="" width="100pxpx" height="50px">
        <h2><span class="discountedprice">&#8377 ${discounted_price}</span><span class="actualprice">&#8377 ${actual_price}</span></h2>
        </div>
        </div>
        `
        document.querySelector(".product-container4").innerHTML+=product_elem
        // <h2><span class="offerpercentage">${discount} off</span></h2>
}




