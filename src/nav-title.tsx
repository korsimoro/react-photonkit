import * as React from 'react'
import * as Photon from './photon';

export interface IProps extends Photon.IProps<NavTitle> {
}

export default class NavTitle extends React.Component<IProps> {
	constructor(props:IProps) {
			super(props);
	}
	render() {
		return (
			<h5 className="nav-group-title">
				{this.props.children}
			</h5>
		);
	}
}
