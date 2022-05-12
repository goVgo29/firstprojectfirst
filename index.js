/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Login';
import BottomTab from './BottomTab';
import HomePage from './BottomTab/HomePage';
import DrawerContent from './Drawer/DrawerContent'
import Settings  from './Settings';
import Test from './Test';
import Biology from './Biology';
import Classes from './Classes';
import Lessons from './Lessons';
import Account from './Account'

AppRegistry.registerComponent(appName, () => App);
