import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
	return (
		<Fragment>
			<Header />
			<main className='py-3'>
				<Container>
					<h1 className='App'>welcome to proShop</h1>
				</Container>
			</main>
			<Footer />
		</Fragment>
	);
};

export default App;
