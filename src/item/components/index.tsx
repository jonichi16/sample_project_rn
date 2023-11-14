import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/AppNavigation';
import useLorem from '../hooks/useLorem';
import {Colors, Spacing, Typography} from '../../common/styles';
import ItemCarousel from './ItemCarousel';
import ItemButtons from './ItemButtons';
import ImageService from '../services/images';
import {CarouselImage} from '../model/CarouselImage';

type ItemProps = NativeStackScreenProps<RootStackParamList, 'Item'>;

const Item = ({route, navigation}: ItemProps) => {
  const {item} = route.params;
  const {lorem, isLoading} = useLorem();
  const [images, setImages] = useState<CarouselImage[]>([]);

  const addPicture = useCallback(
    (uri: string) => {
      const newImage = ImageService.addImage(item, uri);

      setImages(prevState => [newImage, ...prevState]);
    },
    [item],
  );

  useEffect(() => {
    console.log(images);
  }, [images]);

  useEffect(() => {
    navigation.setOptions({title: item});
  }, [item, navigation]);

  useEffect(() => {
    const initImages = ImageService.getImages().filter(
      image => image.item === item || image.item === 'all',
    );

    setImages(prevState => [...prevState, ...initImages]);
  }, [item]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ItemCarousel images={images} />
      <ScrollView>
        <View style={styles.scrollContainer}>
          <Text style={styles.lorem}>{lorem}</Text>
          <ItemButtons disabled={images.length > 4} addPicture={addPicture} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.spacing.md,
    gap: Spacing.spacing.md,
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.spacing.sm,
    gap: Spacing.spacing.sm,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    ...Typography.subHeader.lg,
    color: Colors.primary.dark,
  },
  lorem: {
    ...Typography.body.md,
    color: Colors.primary.dark,
  },
});
