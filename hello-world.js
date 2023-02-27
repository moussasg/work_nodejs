// require ki ykone f package.json = "type": "commonjs",
require('dotenv').config() //Fixe pour manipuler avec .env
const fs = require("fs") // file systéme module intégré
//// créer un fichier // fs('nom_fichier , txt a jouté , funcion (err) { ')
/*
fs.writeFile('welcome.txt', 'hello node', function (err) {
  if (err) throw err; // si ya une erreur ya une intereuption d'éxucution
  console.log('Le fichier a été créé avec succès!');
});
*/
fs.readFile('Hello.txt' , 'utf8' , function(err,data) {
        if(err) throw err; // en cas d'éreur éruption d"exécution de code
        console.log(data) // data yjibha m fichier Hello.txt
})
console.log("fichier lu  avec succés")
///////
//// créer server
var http = require("http") // htp module intégré
const server = http.createServer((req, res ) => {  //req , res c requete et response
        res.end('<h1> hello world!!!!</h1>') // nktb wch n7ab dakhel res.end("...") yetaficha f browser
    })
    // pour écouter le PORT 5000 et le lancer sur browser
server.listen(5000 , () => {  
        console.log(`server started at port ${process.env.PORT}`) //PORT c'est écrit f file .env
});