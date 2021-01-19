import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Header />
				<main className='py-3'>
					<Container>
						<Route exact path='/login' component={LoginScreen} />
						<Route exact path='/register' component={RegisterScreen} />
						<Route exact path='/profile' component={ProfileScreen} />
						<Route exact path='/product/:id' component={ProductScreen} />
						<Route exact path='/cart/:id?' component={CartScreen} />
						<Route exact path='/shipping' component={ShippingScreen} />
						<Route exact path='/payment' component={PaymentScreen} />
						<Route exact path='/placeorder' component={PlaceOrderScreen} />
						<Route exact path='/' component={HomeScreen} />
					</Container>
				</main>
				<Footer />
			</Fragment>
		</Router>
	);
};

export default App;
