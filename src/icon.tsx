import * as React from 'react'
import * as Photon from './photon';

export interface IProps extends Photon.IProps<Icon> {
	glyph:string
	withText?:boolean
	tab?:boolean
}

export default class Icon extends Photon.Component<IProps> {
	static defaultProps: Partial<IProps> = {
		ptClass: 'icon',
		withText: false,
		tab: false
	};

	constructor(props:IProps) {
		super(props)
	}

	render() {
		const props : any = Object.assign({}, this.props);
		const classes = this.getPtClassSet();
		classes[`icon-${props.glyph}`] = true;
		classes['icon-text'] = props.withText;
		classes['icon-close-tab'] = props.tab;
		const className = Photon.classNames(props.className, classes);

		delete props.ptClass;
		delete props.glyph;
		delete props.withText;
		delete props.tab;

		//console.log("ICON:",className,props)
		return (
			<span {...props} className={className}/>
		);
	}
}
