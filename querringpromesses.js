// let op1= new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("op1 est terminée"),1000)
// })
// let op2= new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("op2 est terminée"),500)
// })
// op1.then((resultat1)=>{
//     console.log(resultat1);
//     return op2;
// })
// .then((resultat2)=>{
//     console.log(resultat2);
// })
// .catch((error)=>{
//     console.error("il y a une erreur:",error);
// })



function asyncTask(message,delai) { return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(message === "task2 terminé"){
            reject("task2 échoué");
        }else{
            resolve(message);
        }
    },delai)
})
    
}
async function raceTask() {
    try {
        let resultat= await Promise.race([
            asyncTask("task 1 terminé",1000),
            asyncTask("task 2 terminé",500),
            asyncTask("task 3 terminé",1500)
        ]);
        console.log("premier task terminé",resultat);
    } catch (error) {
        console.error("race echoué");
    }
    
}
raceTask();