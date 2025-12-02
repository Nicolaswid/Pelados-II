import fs, { readFileSync } from "fs";
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function sabores (){
    let sabor_not = fs.readFileSync("data/sabores.json", "utf-8");
    let sabores = JSON.parse(sabor_not);
    console.log(sabores);
    return (sabores);
}
function producto (){
    let produc_not = fs.readFileSync("data/productos.json", "utf-8");
    let productos = JSON.parse(produc_not);
    console.log(productos);
    return (productos);
}   
function recibirPedido (pedido){
    let elPedidoHecho = JSON.parse(fs.readFileSync("data/pedidos.json", "utf-8"));
    elPedidoHecho.push(pedido);
    fs.writeFileSync("data/pedidos.json", JSON.stringify(elPedidoHecho, null, 2));
    return {ok: true}
    
}
subscribeGETEvent ("sabores", sabores);
subscribeGETEvent ("productos", producto);
subscribePOSTEvent ("producto", recibirPedido);
startServer();