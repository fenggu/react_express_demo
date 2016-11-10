import React, { Component } from 'react'; 
import './index.css';
import {  connect } from 'react-redux';
import {  Question } from '../../components';
import {  AnsDetail } from '../../components';
import { increaseAction } from '../../Redux/actions.js'; 
import { incansAction } from '../../Redux/actions.js'; 
import { addtestAction } from '../../Redux/actions.js'; 
import { cgTitle } from '../../Redux/actions.js'; 
import { cgPid} from '../../Redux/actions.js'; 
import fetch from 'isomorphic-fetch'


class RootMainBox extends Component { 
  componentDidMount(){  
  }  
  render() {   
    const{onIncreaseClick,handleChangePid,onAddTestClick,handleChangeTitle,onInansClick}=this.props  
    return (
		<div className="MainBox"> 

    <div className="input-group">
       问卷名称：
      <input  id="testtitle" type="text" onChange={handleChangeTitle} value={this.props.state.test.title} placeholder="请输入测试名称" name=""/> <br/>
      编号：<input type="text" maxLength="2" id="pid" onChange={handleChangePid} value={this.props.state.test.pid} />
    </div>
      <div className="list">  
        {this.props.state.test.question.map((question, index) =>
          <Question {...question}
                key={index}
                num={index+1}
                question={question} 
                />
        )}
        </div> 
     <div id="next" onClick={onIncreaseClick}>下一题</div>
     测试结果
     <div id="anslist">
        <div className="detail" id="ansde"> 
          {this.props.state.test.ansdetext.map((ansdetext, index) =>
            <AnsDetail {...ansdetext}
                  key={index} 
                  num={index}
                  ansdetext={ansdetext}
                  ansdeqj1={this.props.state.test.ansdeqj[index][0]}
                  ansdeqj2={this.props.state.test.ansdeqj[index][1]}
                  />
          )}  
       </div>
      
     </div>
  
     <div id="nextans" onClick={onInansClick}>增加结果</div> 
    <div className="ty_btn"><span onClick={onAddTestClick}>提交</span></div>
		</div>
    )	
  }

}
var num =1;
var ansnum=1;
function mapStateToProps(state) {
  // 这里拿到的state就是store里面给的state
  return { 
    state:state
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return { 
    onIncreaseClick:()=> {
    num =num+1
    dispatch(increaseAction(num)) 
    },
    onInansClick:()=> {
    ansnum =ansnum+1
    dispatch(incansAction(ansnum)) 
    },
    handleChangeTitle:(e)=> { 
      var text=e.target.value
    dispatch(cgTitle(text)) 
    },
    handleChangePid:(e)=> { 
      var text=e.target.value
    dispatch(cgPid(text)) 
    },
    onAddTestClick:()=>{
      dispatch(addtestAction())
    },
  }
}

// Connected Component
let MainBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootMainBox)

export default MainBox;
