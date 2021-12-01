/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Button,
  NativeEventEmitter,
  NativeModules,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

const activityStarter = NativeModules.ActivityStarter;
const eventEmitter = NativeModules.EventEmitter;
const nativeEventEmitter = new NativeEventEmitter(eventEmitter);

const ReactNativeBridge: React.FC = () => {
  const [image, setImage] = useState<any>();

  nativeEventEmitter.addListener(eventEmitter.MyEventName, (params: any) => {
    setImage({
      uri: `data:image/png;base64,${params.encodedImage}`,
      height: params.imageHeight,
      width: params.imageWidth,
    });
  });

  return (
    <View style={styles.container}>
      <Text>Módulo JS</Text>

      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => activityStarter.navigateToExample()}
          title="Open Camera"
        />
      </View>
      {
        image && (
          <Image
            style={{
              width: image.width,
              height: image.height,
            }}
            source={{
              uri: image.uri,
            }}
          />
        )
      }
    </View>
  );
};

export default ReactNativeBridge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5ECFF',
  },
  buttonWrapper: {
    marginVertical: 32,
  },
});
