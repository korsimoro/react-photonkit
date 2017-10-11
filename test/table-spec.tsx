import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';
import { describe,it } from 'mocha'
import Table from '../src/table';

describe('table', () => {
	it('Should create default element', () => {
		const instance = ReactTestUtils.renderIntoDocument(<Table/>);

		expect(instance.node.className).to.be('table-striped');
	});
});
