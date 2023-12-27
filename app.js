const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Christmas Tree",
      price: 129,
      colors: [
        {
          code: "green",
          img: "./img/christmas tree-1.png",
        },
        {
          code: "blue",
          img: "./img/christmas tree-2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Santa",
      price: 89,
      colors: [
        {
          code: "red",
          img: "./img/santa-1.png",
        },
        {
          code: "blue",
          img: "./img/santa-2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Ornaments",
      price: 49,
      colors: [
        {
          code: "red",
          img: "./img/ornaments-1.png",
        },
        {
          code: "blue",
          img: "./img/ornaments-2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Santa Hat",
      price: 89,
      colors: [
        {
          code: "red",
          img: "./img/santa hat-1.png",
        },
        {
          code: "blue",
          img: "./img/santa hat-2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Candles",
      price: 99,
      colors: [
        {
          code: "red",
          img: "./img/candle-1.png",
        },
        {
          code: "blue",
          img: "./img/candle-2.png",
        },
      ],
    },
  ];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      choosenProduct = products[index];

      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;

      //assing new colors
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      
    });
});
});

// change colors 
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });

  // change product size color
  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

// close payment
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});