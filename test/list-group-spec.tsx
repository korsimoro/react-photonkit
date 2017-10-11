import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';
import { describe,it } from 'mocha'
import ListGroup from '../src/list-group';
import ListItem from '../src/list-item';

describe('listgroup', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<ListGroup/>);

		expect(instance.node.nodeName).to.be('UL');
		expect(instance.node.className).to.be('list-group');
	});

	it('Should hide img element if no image prop', () => {
		const tree = (
			<ListGroup>
				<ListItem title="item"/>
			</ListGroup>
		);

		const instance = ReactTestUtils.renderIntoDocument(tree);
		const items = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'img');

		expect(items.length).to.be(0);
	});

	it('Should hide img element if image prop exists', () => {
		const tree = (
			<ListGroup>
				<ListItem title="item" image="no.png"/>
			</ListGroup>
		);

		const instance = ReactTestUtils.renderIntoDocument(tree);
		const items = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'img');

		expect(items.length).to.be(1);
	});
});
