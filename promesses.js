const promesse= new Promise((resolve,reject)=>{
    const reussite= false;
    if(reussite){
        resolve("opération réussite");
    }else{
        reject("opération est échouée");
    }
})
promesse
.then((resultat)=>{
    console.log(resultat);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("successfull handling");
})
