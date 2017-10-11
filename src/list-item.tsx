import * as React from 'react'
import * as Photon from './photon';

export interface IProps extends Photon.IProps<ListItem> {
		active?: boolean
		image?: string
		title: string
		subtitle?: string
}

export default class ListItem extends Photon.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		ptClass: 'list-group-item',
		active: false
	}

	render() {
		const classes = this.getPtClassSet();
		classes.active = this.props.active;
		const className = Photon.classNames(this.props.className, classes);
		let img;

		if (this.props.image) {
			img = (
				<img className="img-circle media-object pull-left" src={this.props.image} width="32" height="32"/>
			);
		}

		return (
			<li className={className}>
				{img}
				<div className="media-body">
					<strong>{this.props.title}</strong>
					<p>{this.props.subtitle}</p>
				</div>
			</li>
		);
	}
}
