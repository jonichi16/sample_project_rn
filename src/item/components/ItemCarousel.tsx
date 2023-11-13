import {Dimensions} from 'react-native';
import React, {useCallback} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import ItemImage from './ItemImage';
import {images} from '../data/images';

const ItemCarousel = () => {
  const width = Dimensions.get('window').width;

  const renderItem = useCallback(({item}: {item: {image: any}}) => {
    return <ItemImage item={item} />;
  }, []);

  return (
    <Carousel
      width={width}
      height={width / 2}
      data={images}
      onSnapToItem={index => console.log(index)}
      mode="parallax"
      modeConfig={{
        parallaxScrollingOffset: 140,
      }}
      renderItem={renderItem}
    />
  );
};

export default ItemCarousel;
