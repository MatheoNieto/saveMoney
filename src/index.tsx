import React from 'react';
import {RootNavigator} from '@routes/root';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as StoreProvider} from 'react-redux';
import {persistor, store} from '@store';
import {NavigationContainer} from '@react-navigation/native';

export const Application = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </StoreProvider>
  );
};
