import * as React from 'react'
import * as Photon from './photon';
import { PhotonStyle } from '.'

export interface IProps extends Photon.IProps<Input> {
	label?:string
	placeholder?:string
	type?:string
}

export default class Input extends Photon.Component<IProps> {
	static defaultProps: Partial<IProps> = {
		label:'text',
		placeholder:'',
		type:'text'
	}

	constructor(props:IProps) {
		super(props);
	}

	getValue() : any {
		if(this.node !== null) {
			const qs = this.node.querySelector('input')
			if(qs !== null)
				return qs.value;
			}
		return undefined
	}

	render() {
		const props : any = Object.assign({},this.props)
		return (
			<div className={PhotonStyle['form-group']} ref={this._recordNode}>
				<label>{this.props.label}{this.props.children}</label>
				<input {...props} className={PhotonStyle['form-control']} placeholder={this.props.placeholder} type={this.props.type}/>
			</div>
		);
	}
}
