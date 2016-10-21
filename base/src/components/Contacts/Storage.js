import Until from "../../Until";
/**
 * 使用localStorage存储联系人数据
 */
let exportObj = {
    save : function(data){
        let mydata = Until.toJsonString(data);
        localStorage.contacts = mydata;
    },
    get : function(){
        let data = localStorage.contacts;
        return Until.toJson( data );
    }
}


export default exportObj;