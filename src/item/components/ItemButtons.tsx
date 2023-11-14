import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Spacing} from '../../common/styles';
import Button from '../../common/components/buttons/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ItemButtons = () => {
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    console.log(response);
  }, [response]);

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
            setResponse,
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
            setResponse,
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
