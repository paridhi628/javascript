function f1(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("Hello student");
            resolve();
        },1000);
    })
}


async function test() {
    try{
    await f1();
    await f2();
    }
    catch(err){
        console.log("Error",err);
    }
}
test();
