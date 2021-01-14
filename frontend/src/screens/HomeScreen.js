import React, { Fragment } from 'react';
import products from '../products.js';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.js';

const HomeScreen = () => {
	return (
		<Fragment>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</Fragment>
	);
};

export default HomeScreen;
