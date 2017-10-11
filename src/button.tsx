import * as React from 'react';
import classNames from 'classnames';
import Icon from './icon';
import * as Photon from './photon';


export interface IProps extends Photon.IProps<Button> {
	className? : string
	ptClass? : string
	ptStyle? : string
	ptSize? : string
	btSize? : string
	glyph? : string
	text? : string
	pullRight?: boolean
	active?: boolean
	form?: boolean
	onClick?: Function
	type?: string
}

export default class Button extends Photon.Component<IProps> {

	static defaultProps: Partial<IProps> = {
		ptClass: 'button',
		ptStyle: 'default',
		active: false,
		pullRight: false
	};

	constructor(props:IProps) {
		super(props);
	}



	getIconComponent() : any {
		const withText : boolean = (this.props.text !== undefined) && this.props.text.length > 0;
		console.log("Button icon w/ text",withText);
		if (this.props.glyph) {
			return 	(
				<Icon glyph={this.props.glyph} withText={withText}/>
			);
		}
	}

	render() {
		const props : any = Object.assign({}, this.props);
		const icon = this.getIconComponent();
		const classes = this.getPtClassSet();
		classes.active = this.props.active;
		classes.btn = true
		classes[`btn-${props.type}`] = true;
		classes['btn-form'] = this.props.form;
		classes['pull-right'] = this.props.pullRight;
		const className = Photon.classNames(this.props.className, classes);

		console.log("Button Class Name:",className);
		delete props.className;
		delete props.ptClass;
		delete props.ptStyle;
		delete props.ptSize;
		delete props.btSize;
		delete props.glyph;
		delete props.withText;
		delete props.active;
		delete props.pullRight;
		delete props.text;

		return (
			<button {...props} className={className} onClick={this.props.onClick} ref={this._recordNode}>
				{icon}{this.props.text}
			</button>
		);
	}
}
