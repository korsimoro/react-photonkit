import * as React from 'react'
import * as Photon from './photon';
import { PhotonStyle } from '.'

export interface IProps extends Photon.IProps<Radio> {
	group?:string
	label?:string
	checked?:string
	onChange?:(event:React.FormEvent<any>) => void
}

export default class Radio extends Photon.Component<IProps> {

	constructor(props:IProps) {
		super(props);
	}

	render() {
		const labelContent = this.props.label || this.props.children
		const checkedProps : any = {}
		if(this.props.checked)
			checkedProps.checked = "checked"
		return (
			<div className={PhotonStyle.radio}>
				<label>
					<input {...checkedProps} name={this.props.group} type="radio" onChange={this.props.onChange} ref={this._recordNode}/>
					{labelContent}
				</label>
			</div>
		);
	}
}
