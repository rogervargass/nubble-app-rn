import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text preset="headingLarge">Teste</Text>
      <Text preset="headingSmall" italic>teste</Text>
      <Text bold>teste</Text>
    </SafeAreaView>
  );
}

export default App;
