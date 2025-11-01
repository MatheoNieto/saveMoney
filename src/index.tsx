import React from 'react';
import {RootNavigator} from '@routes/root';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as StoreProvider} from 'react-redux';
import {persistor, store} from '@store/store';
import {NavigationContainer} from '@react-navigation/native';
import ThemeProvider from '@theme/ThemeProvider';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@services/queryClient';

export const Application = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StoreProvider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <NavigationContainer>
                <RootNavigator />
              </NavigationContainer>
            </QueryClientProvider>
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  );
};
