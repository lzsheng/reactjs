import React from 'react';
import Page from '../Page';
import paq from '../../data/PSQ';
import until from '../../until';
import store from 'store';
import storeKey from '../../StoreKey';

//缓存key
const paqDataArr_random_StoreKEY = storeKey.paqDataArr_random;
const paqDataArr_random_Copy_StoreKEY = storeKey.paqDataArr_random_Copy;
const userPassNum_StoreKEY = storeKey.userPassNum;
const PASSNUM = 3;//系统限制用户必须答对多少题

//如果用户已经通过了,直接跳转到下一个游戏项目
let userPass = function(){
  alert(`你已经答对过${PASSNUM}题了,通过考试啦!!!`);
}

if( store.get(userPassNum_StoreKEY) && store.get(userPassNum_StoreKEY) == PASSNUM ){
  userPass();
}

//判断用户是否还有未答完题目,如果有,则取缓存的数据,不重新构建新的题目
if(!store.get(paqDataArr_random_StoreKEY)||store.get(paqDataArr_random_StoreKEY).length==0){
  //构建"随机数排列的考试试卷数据"的数组
  const paqDataArr = paq.data;//试卷数据
  let randomIndexArr = until.random( paqDataArr.length );//生成随机数
  const paqDataArr_random = [];//根据随机数排列后的考试试卷数据
  paqDataArr.forEach((el)=>{
    paqDataArr_random.push( paqDataArr[ randomIndexArr[0] ] );
    randomIndexArr.shift();//删除第一个
  });

  //设置缓存
  const paqDataArr_random_Copy = paqDataArr_random.slice(0);//随机试题_备份
  store.set(paqDataArr_random_StoreKEY,paqDataArr_random);
  store.set(paqDataArr_random_Copy_StoreKEY,paqDataArr_random_Copy);
}

//显示题目
class Question extends React.Component {

  constructor(props) {
    super(props);
    this.timer = null;
    this.initData = store.get(paqDataArr_random_StoreKEY)||store.get(paqDataArr_random_Copy_StoreKEY);
    this._disabledBtnTimer = this._disabledBtnTimer.bind(this);
    this._clearStore = this._clearStore.bind(this);
    let userPassNum = store.get(userPassNum_StoreKEY) ? store.get(userPassNum_StoreKEY) : 0 ;//用户已经答对了多少题
    this.state = {
      data:this.initData.shift(),
      btnTex:"下一题",
      userCheck:[],//用户选中的答案
      userPassNum:userPassNum,//用户答对题目的数量
    }
  }

  nextQuestion(e){
    //当前题目答对
    let thatUserPassNum = this.state.userPassNum;
    if (this.state.data.result.toString()===this.state.userCheck.toString()) {
      thatUserPassNum++;
      this.setState({userPassNum:thatUserPassNum});
      store.set(userPassNum_StoreKEY,thatUserPassNum);
    }
    
    //通关
    if(thatUserPassNum===PASSNUM){
      userPass();
      return false;
    }

    if (this.initData.length>0) {
      //未通过,进入下一题
      this.setState({
        data:this.initData.shift(),
        userCheck:[],
        disableBtn:true
      });
    }else {
      //答完所有题目,重来一次
      alert(`题目都答完了,但是你还没答对${PASSNUM},再来一次吧!`);
      //清空缓存数据
      this._clearStore();
      window.location.reload();
      return false;
    }
    store.set(paqDataArr_random_StoreKEY,this.initData);//更新题目
  }

  checkResult(e,value){

    let _arr = [value,...this.state.userCheck];//合并数据
    let _set = new Set(_arr);//利用Set实现数组去重
    if( !e.target.checked ){
      //如果是取消选中,则去除value值
      _set.delete(value);
    }
    _arr = Array.from(_set);//Set类型转为Array类型
    _arr.sort();//排序
    console.log(_arr);
    this.setState({userCheck:_arr});

  }

  _disabledBtnTimer(){

    //等待timeout的秒数,才能点击按钮,防止用户快速选择提交
    clearTimeout(this.timer);
    this.timer = setTimeout(()=>{
      this.setState({disableBtn:false});
      clearTimeout(this.timer);
    }, 1000);

  }

  _clearStore(){
    //清空缓存数据
    store.remove(paqDataArr_random_StoreKEY);
    store.remove(paqDataArr_random_Copy_StoreKEY);
    store.remove(userPassNum_StoreKEY);
  }

  render() {
    console.log(this.state.data);
    let title = this.state.data.title;
    let id = this.state.data.id;
    let options = this.state.data.options;

    return (
      <div>
        <p>题目id:{title}</p>
        <ul>
          {
            options.map((option,index)=>{
              return (
                <label style={{display:"block"}} key={id+"_"+index}><input type="checkbox" onChange={e=>{this.checkResult(e,index)}} />{option.txt}</label>
              )
            })
          }
        </ul>
        <button onClick={e=>{this.nextQuestion(e)}}>{this.state.btnTex}</button>
      </div>
    );
  }
}

export default Question;