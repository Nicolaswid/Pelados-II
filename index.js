import fs from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function sabores (){
    let sabor_not = fs.readFileSync("data/sabores.json", "utf-8");
    let sabores = JSON.parse(sabor_not);
    console.log(sabores);
    return (sabores);
}

subscribeGETEvent ("sabores", sabores);
startServer();