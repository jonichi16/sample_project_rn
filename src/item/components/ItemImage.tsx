import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ItemImageProps = {
  item: {image: any};
};

const ItemImage = ({item}: ItemImageProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
    </View>
  );
};

export default ItemImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
