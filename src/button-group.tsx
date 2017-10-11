import * as React from 'react'
import * as Photon from './photon';
import { PhotonStyle } from '.'

export interface IProps extends Photon.IProps<ButtonGroup> {
}

export default class ButtonGroup extends React.Component<IProps> {
	constructor(props:IProps) {
		super(props)
	}
	render() {
		return (
			<div className={PhotonStyle['btn-group']}>
				{this.props.children}
			</div>
		);
	}
}
