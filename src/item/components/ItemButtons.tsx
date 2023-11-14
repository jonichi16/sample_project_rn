import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {Spacing} from '../../common/styles';
import Button from '../../common/components/buttons/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

type ItemButtonsProps = {
  addPicture: (uri: string) => void;
};

const ItemButtons = ({addPicture}: ItemButtonsProps) => {
  const handlePicture = useCallback(
    (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        addPicture(response.assets![0].uri!);
      }
    },
    [addPicture],
  );

  return (
    <View style={styles.buttons}>
      <Button
        title="Take Picture"
        onPress={() => {
          launchCamera(
            {
              saveToPhotos: true,
              mediaType: 'photo',
              includeBase64: false,
            },
            handlePicture,
          );
        }}
      />
      <Button
        title="Upload Picture"
        onPress={() => {
          launchImageLibrary(
            {
              selectionLimit: 0,
              mediaType: 'photo',
              includeBase64: false,
            },
            handlePicture,
          );
        }}
      />
    </View>
  );
};

export default ItemButtons;

const styles = StyleSheet.create({
  buttons: {
    width: '50%',
    gap: Spacing.spacing.md,
    marginBottom: Spacing.spacing.sm,
  },
});
