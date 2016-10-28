import until from "../../until";
/**
 * 使用localStorage存储联系人数据
 */
let exportObj = {
    save : function(data){
        let mydata = until.toJsonString(data);
        localStorage.contacts = mydata;
    },
    get : function(){
        let data = localStorage.contacts;
        return until.toJson( data );
    }
}


export default exportObj;