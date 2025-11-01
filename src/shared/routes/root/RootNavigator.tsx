import {isAuthenticatedSelector} from '@features/auth/store/selectors';
import {useAppSelector} from '@hooks/useStore';
import {PrivateNavigator} from '@routes/private/PrivateNavigator';
import {PublicNavigator} from '@routes/public/PublicNavigator';
import BaseSpinner from '@ui/components/BaseSpinner';
import React from 'react';

export const RootNavigator = () => {
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);
  return (
    <React.Suspense fallback={<BaseSpinner />}>
      {isAuthenticated ? <PrivateNavigator /> : <PublicNavigator />}
    </React.Suspense>
  );
};
