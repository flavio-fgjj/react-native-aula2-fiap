import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Screens
import Dashboard from '../../screens/Dashboard';

// Types
import {TopBarParamList} from './types';

const Tab = createMaterialTopTabNavigator<TopBarParamList>();

export default function TabRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}
