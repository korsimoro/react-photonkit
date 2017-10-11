import * as React from 'react'
import * as Photon from './photon';

export interface IProps extends Photon.IProps<PaneGroup> {
}

export default class PaneGroup extends React.Component<IProps> {
	constructor(props:IProps) {
			super(props);
	}
	render() {
		return (
			<div className="pane-group">
				{this.props.children}
			</div>
		);
	}
}
