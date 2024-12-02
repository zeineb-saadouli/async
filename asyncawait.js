function asyncTask(message,delai) {
    return new Promise ((resolve)=>setTimeout(()=> resolve(message),delai)//basic syntaxe 
    )
    
}
async function exemple() {
    try {
        let task1 = await asyncTask("task1 completed",1000);
        console.log(task1);
        let task2 = await asyncTask("task2 completed",500);
        console.log(task2);
    } catch (error) {
        console.error("il y a une erreur",error);
    }   
}
exemple();
