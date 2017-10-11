import * as React from 'react'

const styleMaps = {
	CLASSES: {
		button: 'btn',
		icon: 'icon',
		toolbar: 'toolbar',
		pane: 'pane',
		'nav-group': 'nav-group',
		'nav-group-item': 'nav-group-item',
		'tab-group': 'tab-group',
		'tab-item': 'tab-item',
		'list-group': 'list-group',
		'list-group-item': 'list-group-item'
	},
	STYLES: [
		'default',
		'primary',
		'positive',
		'negative',
		'warning'
	],
	SIZES: {
		large: 'large',
		mini: 'mini',
		sm: 'sm',
		'one-fourth': 'one-fourth',
		'one-third': 'one-third'
	},
	TYPES: {
		header: 'header',
		footer: 'footer'
	}
};

export interface IProps<B> extends React.Props<B> {
	ptClass?: string
	ptStyle?: string
	ptSize?: string
	ptType?: string
	className?: string
};

export type Node = Element | null

export class Component<P extends IProps<any>,S = any> extends React.Component<P,S> {

	constructor(...args) {
		super(...args)
		this._recordNode = this._recordNode.bind(this)
	}


	findSingleChildOfType(name:string) : any {
    let value: any
    React.Children.forEach(this.props.children,  (child:any) => {
      if (child.type.displayName === name) {
        value = child
      }
    })
    return value
  }

	private _node : Node
	private __component : React.Component<any>

	get node() : Node { return this._node }
	get _component() : React.Component<any> { return this.__component }

	_recordNode(node:Node) : void {
		this._node = node
	}

	_recordComponent(component:React.Component<any>) : void {
		this.__component = component
	}

	_valueOf(key:string | undefined,map:any) : string | undefined {
		if(key === undefined)
			return undefined
		return map[key as string]
	}

	getPtClassSet() : any {
		const classes : any = {};
		const ptClass :string | undefined = this._valueOf(this.props.ptClass,styleMaps.CLASSES)

		if (ptClass) {
			classes[ptClass] = true;
			const prefix = `${ptClass}-`;
			const ptSize :string | undefined = this._valueOf(this.props.ptSize,styleMaps.SIZES)
			if (ptSize) {
				classes[prefix + ptSize] = true;
			}

			if (typeof(this.props.ptStyle) == 'string') {
				if (styleMaps.STYLES.indexOf(this.props.ptStyle) >= 0) {
					classes[prefix + this.props.ptStyle] = true;
				} else {
					classes[this.props.ptStyle as string] = true;
				}
			}

			const ptType :string | undefined = this._valueOf(this.props.ptType,styleMaps.TYPES)
			if (ptType) {
				classes[prefix + ptType] = true;
			}

			//console.log("RETURNING PT CLASSES:",classes)
			return classes;
		}
	}
}

const Sortable = require('sortablejs');
export interface ISortableGroupProps<B> extends IProps<B> {
	draggable?: boolean
};

export class SortableGroup<P extends ISortableGroupProps<any>,S = any> extends Component<P,S> {
	constructor(handleClassName:string,...args:any[]) {
		super(...args)
		this.handleClassName = handleClassName
	}

	readonly handleClassName: string
	sortable : any

	_recordNode(node:Node) {
		super._recordNode(node)
		if (node) {
			this.sortable = Sortable.create(node, {
				handle: this.handleClassName,
				disabled: !this.props.draggable
			});
		}
	}

	componentWillUnmount() {
		if (this.sortable) {
			this.sortable.destroy();
			this.sortable = null;
		}
	}



	setState(obj:any) {
		console.log("AVOID SETTING STATE!",obj )
		super.setState(obj)
	}


}


export interface ISortableGroupItemProps<B> extends IProps<B> {
	active?:boolean
	eventKey?: string | number
	onClick?: () => any
}

export class SortableGroupItem<P extends ISortableGroupItemProps<any>> extends Component<P> {
	type: any
	key: any


	constructor(...args:any[]) {
		super(...args)
	}
}


import { PhotonStyle } from '.'
const classNamesLib = require('classnames')

export function classNames(...args:(string|any)[]) : string {
	const newArgs = args.map((arg) => {
		if ( typeof(arg) === 'string' )
			return PhotonStyle[arg]
		else {
			if ( arg ) {
				const result={}
				for(let key in arg) {
					result[PhotonStyle[key]]=arg[key]
					}
				return result
			}
		}
	})
	const result = classNamesLib(...newArgs)
	return result
}
