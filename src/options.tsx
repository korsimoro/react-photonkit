import * as React from 'react'
import * as Photon from './photon';

export interface IProps extends Photon.IProps<Options> {
	items?:any[]
}

export default class Options extends React.Component<IProps> {

	select : HTMLSelectElement

	static defaultProps : Partial<IProps> = {
		items:[]
	}

	constructor(props:IProps) {
		super(props);

		this.refSelectIndex = this.refSelectIndex.bind(this);
	}

	refSelectIndex(sel: HTMLSelectElement)  {
		this.select = sel;
	}

	getSelectedIndex() : any {
		if (this.select) {
			return this.select.selectedIndex;
		}
	}

	render() {
		if (this.props.items && this.props.items.length > 0) {
			const items = this.props.items.map((item, i) => {
				const key = `option-${i}`;
				return (
					<option key={key}>{item}</option>
				);
			});

			return (
				<select className="form-control" ref={this.refSelectIndex}>
					{items}
				</select>
			);
		}

		return (
			<span/>
		);
	}
}
