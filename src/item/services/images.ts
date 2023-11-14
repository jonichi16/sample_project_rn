import {CarouselImage} from '../model/CarouselImage';

let images: CarouselImage[] = [
  {
    item: 'all',
    image: require('../assets/images/1.jpg'),
  },
  {
    item: 'all',
    image: require('../assets/images/2.jpg'),
  },
  {
    item: 'all',
    image: require('../assets/images/3.jpg'),
  },
  {
    item: 'all',
    image: require('../assets/images/4.jpg'),
  },
];

const getImages = (): CarouselImage[] => {
  return images;
};

const addImage = (item: string, uri: string): CarouselImage => {
  const newImage = {
    item,
    image: {uri: uri},
  };

  images = [...images, newImage];

  return newImage;
};

const ImageService = {
  getImages,
  addImage,
};

export default ImageService;
