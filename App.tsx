import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from './src/components/Button/Button';
import { Text } from './src/components/Text/Text';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge">Olá</Text>
          <Button title="Primary" mt='s14'/>
          <Button preset='outline' title="Outline" mt='s14'/>
          <Button loading title="Entrar" mt='s14'/>
          <Button disabled title="Primary" mt='s14'/>
          <Button disabled preset='outline' title="Outline" mt='s14'/>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
