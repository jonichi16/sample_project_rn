import {CarouselImage} from '../model/CarouselImage';

let images: CarouselImage[] = [
  {
    image: require('../assets/images/1.jpg'),
  },
  {
    image: require('../assets/images/2.jpg'),
  },
  {
    image: require('../assets/images/3.jpg'),
  },
  {
    image: require('../assets/images/4.jpg'),
  },
];

const getImages = (): CarouselImage[] => {
  return images;
};

const addImage = (uri: string): CarouselImage => {
  const newImage = {image: {uri: uri}};

  images = [newImage, ...images];

  return newImage;
};

const ImageService = {
  getImages,
  addImage,
};

export default ImageService;
