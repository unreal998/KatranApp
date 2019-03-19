import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ReservesScreen from "../screens/ReservesScreen/ReservesScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

// const CustomDrawerComponent = (props) => {
//     <Container>
//
//     </Container>
// };

const HomeStack = createStackNavigator({
    Home: HomeScreen,

});
const ReservesStack = createStackNavigator({
    Links: ReservesScreen,
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

export default createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Orders: {
        screen: ReservesStack
    },
    Settings: {
        screen: SettingsStack
    }
    },
    {
        drawerBackgroundColor: "#FFFFFF"
    })