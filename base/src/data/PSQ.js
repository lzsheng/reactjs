
let obj = {};

const enKey = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N"];

var _arr = [];

for (var index = 0; index < 5; index++) {
    _arr.push({
        id:index,
        title:index+".您的兴趣爱好是?",
        options:[
            {
                txt:"唱歌"
            },
            {
                txt:"运动"
            },
            {
                txt:"电子竞技",
                isResult:true
            },
            {
                txt:"阅读"
            }
        ]
    })
}

//根据isResult=true,构建答案result的集合(length为1就是单选)
for (let i = 0; i < _arr.length; i++) {
    
    let el = _arr[i];

    for (let j = 0; j < el.options.length; j++) {

        let option = el.options[j];
        option.txt = `${enKey[j]}:${option.txt}`;
        if (option.isResult) {
            if(typeof el.result == "undefined"){
                el.result = [];
            }
            el.result.push(j);
        }

    }

    //检测录入数据是否有误
    if( typeof el.result == "undefined" ){
        console.error(`题目ID"${el.id}",没有答案!`);
    }

}

console.log(_arr);

obj.data = _arr;

export default obj;