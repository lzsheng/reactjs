import React from 'react';
  let exportsObj = {};

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

export default exportsObj;
