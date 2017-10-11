import * as React from 'react'
import Icon from './icon';
import * as Photon from './photon';


export interface IProps extends Photon.ISortableGroupItemProps<TabItem> {
	title: string,
	glyph?: string,
	selectionIndex?: number
}

export default class TabItem extends Photon.SortableGroupItem<IProps> {

	static defaultProps : Partial<IProps> = {
		ptClass: 'tab-item',
		active: false
	}


	constructor(props:IProps) {
		super(props);
	}


	getIconComponent() : any {
		if (this.props.glyph) {
			return (<Icon glyph={this.props.glyph} withText/>);
		}
	}

	render() {
		const icon = this.getIconComponent();
		const props : any = Object.assign({}, this.props);
		const classes = this.getPtClassSet();
		classes.active = props.active;
		const className = Photon.classNames(props.className, classes);
		//console.log("TAB HAS ICON",icon,classes,className)

		delete props.ptClass;
		delete props.active;
		delete props.selectionIndex;

		return (
			<a {...props} className={className}>
				{icon}{this.props.title}
			</a>
		);
	}
}
