import * as React from 'react'
import Icon from './icon';
import * as Photon from './photon';

export interface IProps extends Photon.ISortableGroupItemProps<NavGroupItem> {
	text:string
	glyph?:string
}

export class NavGroupItem extends Photon.SortableGroupItem<IProps> {

	static defaultProps : Partial<IProps> = {
		ptClass: 'nav-group-item',
		active: false
	};

	getIconComponent() : any {
		if (this.props.glyph) {
			return (<Icon glyph={this.props.glyph} withText/>);
		}
	}

	render() : any {
		const props : any = Object.assign({}, this.props);
		const classes = this.getPtClassSet();
		classes.active = props.active;
		const className = Photon.classNames(props.className, classes);
		const icon = this.getIconComponent();

		delete props.eventKey;
		delete props.ptClass;
		delete props.glyph;
		delete props.withText;
		delete props.active;
		delete props.text;

		return (
			<a {...props} className={className}>
				{icon}{this.props.text}
			</a>
		);
	}
}

export default NavGroupItem
