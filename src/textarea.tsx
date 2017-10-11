import * as React from 'react'
import * as Photon from './photon';

export interface IProps extends Photon.IProps<TextArea> {
	placeholder?:string
	label?:string
}

export default class TextArea extends Photon.Component<IProps> {

	private textArea : HTMLTextAreaElement
	constructor(props:IProps) {
		super(props);
	}

	getValue() : any {
		return this.textArea.value;
	}

	render() {
		return (
			<div className="form-group">
				<label>{this.props.label}</label>
				<textarea {...this.props} className="form-control" placeholder={this.props.placeholder} ref={(textArea:HTMLTextAreaElement) => { this.textArea = textArea}}>
					{this.props.children}
				</textarea>
			</div>
		);
	}
}
