import * as React from 'react'
import * as Photon from './photon';
import { PhotonStyle } from '.'

export interface IProps extends Photon.IProps<Content> {
}

export default class Content extends React.Component<IProps> {
	constructor(props:IProps) {
		super(props)
	}
	render() {
		return (
			<div className={PhotonStyle['window-content']}>
				{this.props.children}
			</div>
		);
	}
}
