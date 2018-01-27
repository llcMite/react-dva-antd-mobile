import React, {Component}from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import {Button} from 'antd-mobile';

const key='IndexPage'
class IndexPage extends Component{
	constructor(props){
       super(props)
       this.state={

       }
	}

	componentWillMount(){
		this.init();
	}

	init(){
		this.props.dispatch({
			type:`${key}/fetchlist`,
			payload:{
				backup(){

				}
			}
		})
	}

	render(){
        const {}=this.state;
        const {}=this.props;

		return(<div className={styles.wrap}>
             <Button>按钮</Button>
			</div>)
	}
}

//state里有所有model的数据然后返回即注入到该组件中
export default connect((state)=>{return state[key]})(IndexPage);
