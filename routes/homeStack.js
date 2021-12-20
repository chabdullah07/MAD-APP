import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FeedbackScreen from '../components/FeedbackScreen';
import Login from '../components/Login';
import Signup from '../components/Signup';
import ForgotPassword from '../components/ForgotPassword';
import Splash2 from '../components/Splash2';
import Splash3 from '../components/Splash3';
import Home from '../components/Home';
import Splash4 from '../components/Splash4';
import Accounts from '../components/Accounts';
import Details from '../components/Details';

const screens = {
  Splash2: {
    screen: Splash2,
    navigationOptions: {
        headerShown: null,
      }
  },

  Accounts: {
    screen: Accounts,
  },

  Details: {
      screen: Details,
      navigationOptions: {
        headerShown: null,
      }
  },

  Splash3: {
    screen: Splash3,
    navigationOptions: {
      headerShown: null,
    }
  },

  Splash4: {
    screen: Splash4,
    navigationOptions: {
      headerShown: null,
    }
  },

  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: null,
    }
  },

  FeedbackScreen: {
    screen: FeedbackScreen,
  },

  Login: {
    screen: Login,
    navigationOptions: {
        headerShown: null,
      }
  },

  Signup: {
    screen: Signup,
    navigationOptions: {
        headerShown: null,
    },
      },

  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
        headerShown: null,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);