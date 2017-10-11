import * as React from 'react'
import { PhotonStyle } from '.'

export interface IProps extends React.Props<ActionBar> {
}

export default class ActionBar extends React.Component<IProps> {
	constructor(props:IProps) {
		super(props)
	}
	render() {
		return (
			<div className={PhotonStyle['toolbar-actions']}>
				{this.props.children}
			</div>
		);
	}
}

//ActionBar.propTypes = {
//	children: React.PropTypes.node
//};
