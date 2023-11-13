import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import ItemImage from './ItemImage';
import {images} from '../data/images';

const ItemCarousel = () => {
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

const styles = StyleSheet.create({});
