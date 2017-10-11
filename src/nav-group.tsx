import * as React from 'react'
import * as Photon from './photon';
import { NavGroupItem } from '.'

export interface IProps extends Photon.ISortableGroupProps<NavGroup> {
	activeKey?:any
	onSelect?:Function
}

export default class NavGroup extends Photon.SortableGroup<IProps> {
	static defaultProps : Partial<IProps> = {
		activeKey: '',
		ptClass: 'nav-group',
	};

	constructor(props:IProps) {
			super('.nav-group',props);
	}

	renderNav(child:NavGroupItem, index:number) : any {
		const active = this.props.activeKey === child.props.eventKey;
		const childProps : any = {
		 active: active,
		 eventKey: `nav-group-item-${index}`,
		 onClick: () => {

			 this.setState({
				 activeKey: child.props.eventKey
			 });

			 if (this.props.onSelect) {
				 return this.props.onSelect(child.props.eventKey);
			 }
		 }
	 }
		return React.cloneElement(child,childProps)
	}

	render(): any {
		const classes : any = this.getPtClassSet();
		const className : any = Photon.classNames(this.props.className, classes);
		/*
		let childNavs;

		console.log("KIDS:",this.props.children)
		if (this.props.children instanceof Array) {
			childNavs = this.props.children.map((child:any, index:number) => {
				console.log("LOOKING AT KID:",child.type.displayName)
				if(child.type.displayName == 'NavGroupItem')
					return this.renderNav(child, index);
			});
		}
		*/

		return (
			<nav className={className} ref={this._recordNode}>
					{this.props.children}
			</nav>
		);
	}
}
