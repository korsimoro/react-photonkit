import * as React from 'react'
import * as Photon from './photon';
import { PhotonStyle } from '.'

export interface IProps extends Photon.IProps<Table> {
}

export default class Table extends Photon.Component<IProps> {
	constructor(props:IProps) {
		super(props);
	}

	render() {
		return (
			<table className={PhotonStyle['table-striped']} ref={this._recordNode}>
				{this.props.children}
			</table>
		);
	}
}
