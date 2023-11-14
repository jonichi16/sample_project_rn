import {useCallback, useEffect, useState} from 'react';
import {CarouselImage} from '../model/CarouselImage';
import ImageService from '../services/images';

const useImage = (item: string) => {
  const [currentIndex, setCurrenIndex] = useState(0);
  const [images, setImages] = useState<CarouselImage[]>([]);

  const addPicture = useCallback(
    (uri: string) => {
      const newImage = ImageService.addImage(item, uri);

      setImages(prevState => {
        const newArray = [...prevState];
        newArray.splice(currentIndex, 0, newImage);
        return newArray;
      });
    },
    [currentIndex, item],
  );

  // initialize images in the carousel when screen is rendered
  useEffect(() => {
    const initImages = ImageService.getImages().filter(
      image => image.item === item || image.item === 'all',
    );

    setImages(prevState => [...prevState, ...initImages]);
  }, [item]);

  return {images, setCurrenIndex, addPicture};
};

export default useImage;
