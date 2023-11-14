import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {Spacing} from '../../common/styles';
import Button from '../../common/components/buttons/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

type ItemButtonsProps = {
  disabled: boolean;
  addPicture: (uri: string) => void;
};

const ItemButtons = ({disabled, addPicture}: ItemButtonsProps) => {
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
        disabled={disabled}
        style={styles.button}
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
        disabled={disabled}
        style={styles.button}
        onPress={() => {
          launchImageLibrary(
            {
              selectionLimit: 1,
              mediaType: 'photo',
              presentationStyle: 'fullScreen',
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
    width: '100%',
    alignItems: 'center',
    gap: Spacing.spacing.md,
    marginBottom: Spacing.spacing.sm,
  },
  button: {
    width: '50%',
  },
});
