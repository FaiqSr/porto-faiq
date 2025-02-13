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
