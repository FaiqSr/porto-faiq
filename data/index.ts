const getRandomDimension = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const dummyData = Array.from({ length: 20 }, () => {
  const width = getRandomDimension(100, 1920);
  const height = getRandomDimension(100, 1080);
  return {
    src: `https://picsum.photos/${width}/${height}`,
    alt: "test",
    width: width,
    height: height,
  };
});

export const dummyData2 = Array.from({ length: 3 }, () => {
  const width = getRandomDimension(100, 1920);
  const height = getRandomDimension(100, 1080);
  return {
    src: `https://picsum.photos/${width}/${height}`,
    alt: "test",
    width: width,
    height: height,
  };
});


export const momentSectionImage = [
  {
    id : 1,
    text: "organizational events",
    src: "./images/organizational.jpg",
    alt: "img1"
  },
  {
    id : 2,
    text: "Capture the moment",
    src: "./images/captureAMoment.JPG",
    alt: "img1"
  },
  {
    id : 1,
    text: "Funny",
    src: "./images/funny.JPG", 
    alt: "img1"
  },
]


export const galeryImage = [
  {
    id: 1,
    src: "./images/famili/1.jpg",
    alt: "img1"
  },
  {
    id: 2,
    src: "./images/famili/2.jpg",
    alt: "img2"
  },
  {
    id: 3,
    src: "./images/famili/4.jpg",
    alt: "img3"
  },
  {
    id: 4,
    src: "./images/famili/5.jpg",
    alt: "img4"
  },
  {
    id: 5,
    src: "./images/famili/6.jpg",
    alt: "img5"
  },
  {
    id: 6,
    src: "./images/makrab/1.jpg",
    alt: "img6"
  },
  {
    id: 7,
    src: "./images/makrab/3.jpg",
    alt: "img7"
  },
  {
    id: 8,
    src: "./images/makrab/2.jpg",
    alt: "img8"
  },
  {
    id: 9,
    src: "./images/makrab/4.jpg",
    alt: "img9"
  },
  {
    id: 10,
    src: "./images/makrab/5.jpg",
    alt: "img10"
  },
  {
    id: 11,
    src: "./images/makrab/6.jpg",
    alt: "img11"
  },
  {
    id: 12,
    src: "./images/timses/1.jpg",
    alt: "img12"
  },
  {
    id: 13,
    src: "./images/timses/2.jpg",
    alt: "img13"
  },
  {
    id: 14,
    src: "./images/timses/3.jpg",
    alt: "img14"
  },
  {
    id: 15,
    src: "./images/timses/4.jpg",
    alt: "img15"
  },
  {
    id: 16,
    src: "./images/timses/5.jpg",
    alt: "img16"
  },
  {
    id: 17,
    src: "./images/timses/6.jpg",
    alt: "img17"
  },
  {
    id: 18,
    src: "./images/micro/1.jpg",
    alt: "img18"
  },
  {
    id: 19,
    src: "./images/micro/2.jpg",
    alt: "img19"
  },
  {
    id: 20,
    src: "./images/micro/3.jpg",
    alt: "img20"
  },
  {
    id: 21,
    src: "./images/micro/4.jpg",
    alt: "img21"
  },
  {
    id: 22,
    src: "./images/micro/5.jpg",
    alt: "img22"
  },
  {
    id: 23,
    src: "./images/micro/6.jpg",
    alt: "img23"
  },
  {
    id: 24,
    src: "./images/famili/3.jpg",
    alt: "img24"
  },
]