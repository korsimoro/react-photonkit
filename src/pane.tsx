import * as React from 'react'
import * as Photon from './photon';

export interface IProps extends Photon.IProps<Pane> {
	sidebar?:boolean
}

export default class Pane extends Photon.Component<IProps> {
	static defaultProps: Partial<IProps> = {
		ptClass: 'pane',
		sidebar: false
	}

	constructor(props:IProps) {
			super(props);
	}
	render() {
		const classes = this.getPtClassSet();
		classes.sidebar = this.props.sidebar;
		const className = Photon.classNames(this.props.className, classes);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
}
