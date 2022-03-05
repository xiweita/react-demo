# 一、基础知识
## a)数组
    ```js
    var arr=[1,2,3,4];
    var index=arr.indexOf(3);
    console.log(index)   //2

    arr.includes()  此方法判断数组中是否存在某个数值，如果存在返回true
    否则返回false
    var arr=[1,2,3,4];
    if(arr.includes(3)){
        console.log("存在")
    }else{
        console.log("不存在")
    }

    arr.find()
    返回数组中满足条件的第一个元素的值，如果没有，返回undefined
    var arr=[1,2,3,4,5];
    var result=arr.find(item=>{
        return item>3
    })
    console.log(result)  //4

    arr.findIndex()  返回数组中满足条件的第一个元素的下标，如果没有找到，返回-1
    var arr=[1,2,3,4];
    var result=arr.findIndex(item=>{
        return item>3
    })
    console.log(result)   //3
    ```


