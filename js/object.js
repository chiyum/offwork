
// 陣列[]
// 陣列的排序為0開始
var answer;
var commodity = [];
commodity.push(3);
commodity.push(5);
commodity.push('九');
// push為依序新增數值
commodity[2] = 9
// 可透過此方法改變數值或新增數值
commodity[3] = 10
// 查詢數值數量語法 例如上面加起來總共有4個數值，顯示就是4
answer = '總共有' + commodity.length + '個商品';

var test = ['函數',commodity];
//陣列不限於value，也可放funciton等

/*  以下物件介紹 */

var store = {
    employee:['喬治','佩奇'],
    meat:[3,6,9],
    money:3000,
    offwork:function(){
       return store.employee[1] + '，該下班囉'
    },
}
//此為物件
var beef = store.meat[0]
answer = store.meat[2]
//抓取物件
store.vegetable = [3,9,7]
store.meat[0] = 7 
store.meat.push(100)
//改變或增加物件值


var who = {
    people:['阿玫','阿如'],
    day:1440,
    hour:[30,60],
    offwork1:function(){
        alert ('恭喜' + who.people[0] + '下班囉');
    },
    offwork2:function(){
        alert ('恭喜' + who.people[1] + '下班囉');
    },
    enjoy:function(){
       var day = document.getElementById('dayId').value;
       var hour = document.getElementById('hourId').value;
       var total = (who.day * parseInt(day)) + (who.hour[1] * parseInt(hour)) ;
       document.getElementById('timeId').textContent = total
    }
};

document.getElementById('brotherId').onclick = who.offwork1;
document.getElementById('georgeId').onclick = who.offwork2;
document.getElementById('countId').onclick = who.enjoy;




// document.getElementById('countId').onclick = function(){
//         var day = document.getElementById('dayId').value;
//         var hour = document.getElementById('hourId').value;
//         var oneday = 60 * 24;
//         var onehour = 60;
//         var total =  (parseInt(day) * oneday) + (parseInt(hour) * onehour );
//         document.getElementById('timeId').textContent = total
// }
//此為單純function不加在物件內




