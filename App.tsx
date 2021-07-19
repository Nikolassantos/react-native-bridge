/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, NativeModules, Button} from 'react-native';

const App = () => {
  const activityStarter = NativeModules.ActivityStarter;

  return (
    <SafeAreaView>
      <View>
        <Button
          title="handle"
          onPress={() => activityStarter.navigateToExample()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
