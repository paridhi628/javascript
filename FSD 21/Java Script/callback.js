function sum(a,b){
    return a+b;
}
function sumWithMessage(clbk, msg){
    const result=clbk(20,30);
    const fresult="Hi" +msg + "Your score is " + result;
    console.log(fresult);
 //  console.log(sum(2,3));
}
sumWithMessage(sum, "Miss Paridhi");