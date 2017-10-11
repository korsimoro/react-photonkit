import * as React from 'react'
import * as Photon from './photon';
import { PhotonStyle } from '.'

export interface IProps extends Photon.IProps<Toolbar> {
	title?:string
}


export default class Toolbar extends Photon.Component<IProps> {
	static defaultProps : Partial<IProps> = {
		ptClass: 'toolbar',
		ptType: 'header'
	}
	constructor(props:IProps) {
		super(props);
	}


	render() : any {
		const classes = this.getPtClassSet();
		const className = Photon.classNames(this.props.className, classes);
		let title;

		if (this.props.title) {
			title = <h1 className={PhotonStyle['title']}>{this.props.title}</h1>;
		}

		if (this.props.ptType === 'footer') {
			return (
				<footer className={className} ref={this._recordNode}>
					{title}
					{this.props.children}
				</footer>
			);
		}

		return (
			<header className={className} ref={this._recordNode}>
				{title}
				{this.props.children}
			</header>
		);
	}
}
