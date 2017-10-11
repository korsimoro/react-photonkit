import * as React from 'react'
import classNames from 'classnames';
import * as Photon from './photon';
import Sortable from 'sortablejs';


export interface IProps extends Photon.IProps<ListGroup> {
	draggable?:boolean
}

export default class ListGroup extends Photon.SortableGroup<IProps> {
	static defaultProps: Partial<IProps> = {
		ptClass: 'list-group',
		draggable: false
	}


	constructor(props:IProps) {
		super('.list-group',props);
	}

	sortable : any

	_recordNode(node:HTMLElement | null) {
		super._recordNode(node)
		if (node) {
			this.sortable = Sortable.create(node, {
				handle: '.list-group',
				disabled: !this.props.draggable
			});
		}
	}

	componentWillUnmount() {
		if (this.sortable) {
			this.sortable.destory();
			this.sortable = null;
		}
	}

	render() {
		const classes = this.getPtClassSet();
		const className = classNames(this.props.className, classes);

		return (
			<ul className={className} ref={this._recordNode}>
				{this.props.children}
			</ul>
		);
	}
}
