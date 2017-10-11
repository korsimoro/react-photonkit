import * as React from 'react'
import * as Photon from './photon';

export interface IProps extends Photon.IProps<CheckBox> {
	label?: string
	checked?: boolean
};

export default class CheckBox extends Photon.Component<IProps> {
	constructor(props:IProps) {
		super(props);
	}

	isChecked() : boolean {
		if(this.node !== null) {
			const qs = this.node.querySelector('input')
			if(qs !== null)
				return qs.checked;
			}
		return false
	}

	render() {
		// 					<input {...this.props} type="checkbox"/>

		return (
			<div className={Photon.classNames('checkbox')} ref={this._recordNode}>
				<label>
					<input  type="checkbox"/>
					{this.props.label}
				</label>
			</div>
		);
	}
}
