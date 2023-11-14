import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/AppNavigation';
import useLorem from '../hooks/useLorem';
import {Colors, Spacing, Typography} from '../../common/styles';
import ItemCarousel from './ItemCarousel';
import ItemButtons from './ItemButtons';
import useImage from '../hooks/useImage';

type ItemProps = NativeStackScreenProps<RootStackParamList, 'Item'>;

const Item = ({route, navigation}: ItemProps) => {
  const {item} = route.params;
  const {lorem, isLoading} = useLorem();
  const {images, setCurrenIndex, addPicture} = useImage(item);

  // set the title of the header after render
  useEffect(() => {
    navigation.setOptions({title: item});
  }, [item, navigation]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <ItemCarousel images={images} setCurrentIndex={setCurrenIndex} />
      </View>
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
  carousel: {
    marginBottom: Spacing.spacing.md,
  },
  scrollContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: Spacing.spacing.sm,
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
