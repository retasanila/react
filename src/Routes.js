import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';


import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Retas';
import Scrollview from './pages/Scrollview';
import Chat from './components/Firstscreen';
import Notif from './components/Secondscreen';
import Profil from './components/Thirdscreen';
import Version from './pages/Version';
import Item from './pages/Item';

import InsertUser from './pages/Version';

export default class Routes extends Component<{}> {
	render() {
		return (
			<Router>
		    <Stack key="root" hideNavBar={true}>
		      <Scene key="scrollview" component={Scrollview} title="Scrollview" initial={true}/>
		      <Scene key="login" component={Login} title="Login" />
		      <Scene key="signup" component={Signup} title="Register" />
		      <Scene key="dashboard" component={Dashboard} title="Reta" />
		      <Scene key="firstscreen" component={Chat} title="Firstscreen" />
		      <Scene key="secondscreen" component={Notif} title="Secondscreen" />
		      <Scene key="thirdscreen" component={Profil} title="Thirdscreen" />
		      <Scene key="thirdscreen" component={Profil} title="Thirdscreen" />
		      <Scene key="version" component={Version} title="Version" />
		      <Scene key="shop" component={Item} title="Item" />
		      <Scene key="InsertUser" component={InsertUser} title="InsertUser" />
		    </Stack>
		  </Router>
			)
	}
}