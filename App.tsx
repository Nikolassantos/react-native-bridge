import React from 'react';
import {
  SafeAreaView,
  View,
  NativeModules,
  Button,
  StyleSheet,
  ToastAndroid,
} from 'react-native';

const App = () => {
  const activityStarter = NativeModules.ActivityStarter;

  function showToast(str: string) {
    ToastAndroid.show(str, ToastAndroid.SHORT);
  }

  function copyToClipboard() {
    NativeModules.Clipboard.setString('Copied to clipboard from JavaScript!');

    ToastAndroid.show(
      'Copied to clipboard from JavaScript!',
      ToastAndroid.SHORT,
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.buttonStyle}>
          <Button
            title="Navigate"
            onPress={() => activityStarter.navigateToExample()}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            onPress={() =>
              activityStarter.getActivityName((name: string) => showToast(name))
            }
            title="Get activity name"
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => activityStarter.callJavaScript()}
            title="Call JavaScript from Java"
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button onPress={copyToClipboard} title="Copy to clipboard" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonStyle: {
    marginTop: 5,
  },
});

export default App;
