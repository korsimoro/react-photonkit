import * as React from 'react'
import * as Photon from './photon';
import { TabItem } from '.'
import Children from 'react-children-utilities';

export interface IProps extends Photon.ISortableGroupProps<TabGroup> {
	selectedIndex?:number
	onSelect?:Function
}
export interface IState {
	selectedIndex:number
}

export default class TabGroup extends Photon.SortableGroup<IProps> {

	static defaultProps : Partial<IProps> = {
		selectedIndex: 0,
		ptClass: 'tab-group',
	}

	constructor(props:IProps) {
		super('.tab-group',props);
		this.state = {
			selectedIndex:this.props.selectedIndex
		}
	}

	findAllChildrenOfType(name:string) : any[] {
    let value: any[] = []
    React.Children.forEach(this.props.children,  (child:any) => {
      if (child.type.displayName === name) {
        value.push(child)
      }
			else {
				console.log("How to look for kids",child)
			}
    })
    return value
  }

	renderTab(child:TabItem, index:number) : any {
		console.log("Child.type",''+child.type,"from",child.type)
		if ( !child.type || child.type.displayName !== name ) {
			console.log("Child is not TabItem:",child)
			return
		}

		const active = this.state.selectedIndex === child.props.selectionIndex;
		const childProps : any = {
			...child.props,
			active: active,
			key: index,
			selectionIndex: index,
			onClick: () => {
				this.setState({
					selectedIndex: index
				});

				if (this.props.onSelect) {
					this.props.onSelect(child.props.selectionIndex);
				}
			}
		}
		return React.cloneElement(child, childProps)
	}

	render() {

		const result = Children.groupByType(this.props.children,['span','TabItem'],'other')
		console.log("COOL",result)

		const classes = this.getPtClassSet();
		const className = Photon.classNames(this.props.className, classes);

		let childTabs,childPane;

		// this.props.children is an array if there are more than one, and a single
		// object (not an array of length 1) - so we handle them slightly differently
		if (this.props.children instanceof Array) {
			childTabs = this.props.children.map((child:TabItem, index:number) => {
				return this.renderTab(child, index);
			});
			childPane= this.props.children[this.state.selectedIndex]
		}
		else {
			childTabs = [this.props.children].map((child:TabItem, index:number) => {
				return this.renderTab(child, index);
			});
			childPane = this.props.children
		}

		if ( childPane === undefined ) {
			childPane = (<div><h1>Tab selection not found, selected Index = {this.state.selectedIndex}</h1></div>)
		}

		return (
			<div ref={this._recordNode}>
				<div className={className}>
					{childTabs}
				</div>
				<div>
					{childPane.props.children}
				</div>
			</div>
		);
	}
}
