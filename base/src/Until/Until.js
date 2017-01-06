import store from 'store';

  let exportsObj = {};

  /**=======获取url参数=======*/
exportsObj.getRequest = function(){
      var url = location.search; //获取url中"?"符后的字串
      var theRequest = new Object();
      var strs = "";
      if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
      }
      return theRequest;
}

  //把json字符串转成 json对象
  exportsObj.toJson = function(data){
    if (typeof data == "string") {
          return JSON.parse(data);
    }else{
          return data
    }
  }

  //把json对象转成 json字符串
  exportsObj.toJsonString = function(data){
    if (typeof data == "object") {
          return JSON.stringify(data);
    }else{
          return data
    }
  }

  //生成不重复的随机数,count为生成0-count之间的随机数
  //如果count为10,则生成的数组包含 0,1,2,3,4,5,6,7,8,9
  exportsObj.random = function(count) {
      var _count=count; 
      var originalArray=new Array;//原数组 
      //给原数组originalArray赋值 
      for (var i=0;i<_count;i++){ 
      originalArray[i]=i; 
      } 
      var d1=new Date().getTime(); 
      originalArray.sort(function(){ return 0.5 - Math.random(); }); 
      return originalArray;
  }

export default exportsObj;
