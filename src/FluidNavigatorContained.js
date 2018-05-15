import { createNavigationContainer } from 'react-navigation';
import createFluidNavigator from './createFluidNavigator';

export default (routeConfigMap, stackConfig = {}) => {
  const Navigator = createFluidNavigator(routeConfigMap, stackConfig);
  return createNavigationContainer(Navigator);
};
