import {Dimensions} from 'react-native';
import React, {useCallback} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import ItemImage from './ItemImage';
import {CarouselImage} from '../model/CarouselImage';

type ItemCarouselProps = {
  images: CarouselImage[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ItemCarousel = ({images, setCurrentIndex}: ItemCarouselProps) => {
  const width = Dimensions.get('window').width;

  const renderItem = useCallback(({item}: {item: {image: any}}) => {
    return <ItemImage item={item} />;
  }, []);

  return (
    <Carousel
      width={width}
      height={width / 2}
      data={images}
      onSnapToItem={index => setCurrentIndex(index)}
      mode="parallax"
      modeConfig={{
        parallaxScrollingOffset: 140,
      }}
      renderItem={renderItem}
    />
  );
};

export default ItemCarousel;
