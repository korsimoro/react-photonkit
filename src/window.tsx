import * as React from 'react'
import * as Photon from './photon';
import { PhotonStyle } from '.'

export interface IProps extends Photon.IProps<Window> {
}

export default class Window extends Photon.Component<IProps> {

	constructor(props:IProps) {
		super(props);
	}


	render() : any {
		return (
			<div className={PhotonStyle.window}>
				{this.props.children}
			</div>
		);
	}
}
