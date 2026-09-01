function details(){
let org={
    username: "Paridhi",
    password: "pari123"
};
return org;
}
let a=Paridhi;
 let b=pari123;

function main(clback,ad){
    const result=clback();
    if(result.username===a && result.password===b){
        console.log(ad);
    }    
}
main(details, "Hello");