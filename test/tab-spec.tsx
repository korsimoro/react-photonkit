import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';
import { describe,it } from 'mocha'
import TabGroup from '../src/tab-group';
import TabItem from '../src/tab-item';

describe('tab', () => {
	it('Should create default element', () => {
		let tree = <TabGroup/>;
		let instance = ReactTestUtils.renderIntoDocument(tree);
		expect(instance.node).to.be.ok();

		tree = (
			<TabGroup>
				<TabItem title="tab1">tab1</TabItem>
				<TabItem title="tab2">tab2</TabItem>
			</TabGroup>
		);

		instance = ReactTestUtils.renderIntoDocument(tree);
		expect(instance.node.children.length).to.be(2);
	});

	it('Should be active when clicked', done => {
		const onSelect = key => expect(2).to.be(key);

		const tree = (
			<TabGroup selectedIndex={1} onSelect={onSelect}>
				<TabItem selectionIndex={1} title="tab1">contents1</TabItem>
				<TabItem selectionIndex={2} title="tab2">contents2</TabItem>
			</TabGroup>
		);

		const instance = ReactTestUtils.renderIntoDocument(tree);
		const items = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'a');
		ReactTestUtils.Simulate.click(items[1]);

		expect(instance.node.children[1].textContent).to.be('contents2');
		done();
	});

	it('Draggable should be endabled', () => {
		const tree = (
			<TabGroup selectedIndex={1} draggable>
				<TabItem selectionIndex={1} title="tab1">contents1</TabItem>
				<TabItem selectionIndex={2} title="tab2">contents2</TabItem>
			</TabGroup>
		);

		const instance = ReactTestUtils.renderIntoDocument(tree);
		expect(instance.sortableOptions.disabled).to.be(false);
	});
});
