import React, { Component } from 'react';
import {Link} from 'react-router';
import './index.css';
import {  connect } from 'react-redux';
import { getlistAction } from '../../Redux/actions.js'; 
import { gettestAction } from '../../Redux/actions.js'; 

class RootLeftBar extends Component {  

  // maptitle=(arr)=>{   	
  //           return  (
  //            <div  key={arr.pid} onClick={getTest} id={arr.pid} className="leftchild">  
  //            	 {arr.title} 
  //           </div>)  
  //     } 
  componentDidMount(){  
    const{getList}=this.props
    getList();
  } 
  render() {
    const{getTest,handleClick}=this.props
    return (
		<div className="LeftBar">
			 <div className="leftchild lefttitle">
			 	问卷列表
			 </div> 
        {this.props.main.map((main, index) =>
          <div {...main}
           {...main} key={main.pid} onClick={getTest} id={main.pid} className="leftchild" >
                 {main.title} 
          </div>
        )}
			 <div className="leftchild lefttitle btn btn-info" onClick={handleClick}>

        新增问卷 
			 </div>
		</div>
    )	
  }

}
function mapStateToProps(state) {
  // 这里拿到的state就是store里面给的state
  return { 
    main:state.main
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return { 
    getList:()=> { 
      fetch('getlist', {  
        method: 'get',
     }).then(function(response) {
        console.log(response)
        return response.json();
    }).then(function(json){
      console.log(json.data)
       dispatch(getlistAction(json.data))
    })
    .catch(function(err) {
        // 捕获错误
        console.log(err)
    }); 
    },
    getTest:(e)=>{
        var Ev=e.target; 
        var pid=Ev.getAttribute("id")
        dispatch(gettestAction(pid))
    },
  handleClick:(e)=>{
    window.location.href="admin.html"
  }
  }
}

// Connected Component
let LeftBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootLeftBar)

export default LeftBar;
