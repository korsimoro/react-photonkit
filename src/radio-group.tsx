import * as React from 'react'
import { ReactElement } from 'react';
import * as Photon from './photon';

export interface IProps extends Photon.IProps<RadioGroup> {
	name:string
	checkedIndex?:number
}

export default class RadioGroup extends React.Component<IProps> {

	constructor(props:IProps) {
		super(props);
	}

	onChange(index:number,callback:Function | undefined,event:React.FormEvent<any>) : any {
		//console.log("RADIO CHANGE:",index,event,callback)
		if (callback) callback()
		return this.setState({
			checkedIndex: index
		});
	}

	getCheckedIndex() {
		return this.props.checkedIndex;
	}

	getChildren() : any[] | undefined {
		if(this.props.children instanceof Array) {
			return this.props.children.map((child:ReactElement<any>, index:number) => {
				return React.cloneElement(child,{
					key: index,
					group:this.props.name,
					checked:this.props.checkedIndex === index,
					onChange:this.onChange.bind(this, index, child.props.onChange)
				})
			});
		}
		else
			return undefined
	}

	render() {
		return (
			<div>
				{this.getChildren()}
			</div>
		);
	}
}
