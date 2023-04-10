import e from "../../data/data.json"assert{type: "json"}; import { Gift as t } from "./clases.js"; let cuerpoTabla = document.querySelector("#cuerpo-tabla"), myModal = new bootstrap.Modal(document.getElementById("modalGift")), idGiftUpdate = null; window.mostrarModal = t => { console.log(t), idGiftUpdate = t; let a = e.findIndex(e => e.id == idGiftUpdate); document.querySelector("#giftModal").value = e[a].gift, document.querySelector("#tipoModal").value = e[a].tipo, document.querySelector("#tiempoModal").value = e[a].tiempo, document.querySelector("#precioModal").value = e[a].precio, document.querySelector("#imagenModal").value = e[a].imagen, myModal.show() }; let giftUpdate = t => { t.preventDefault(); let a = e.findIndex(e => e.id == idGiftUpdate); e[a].gift = document.querySelector("#giftModal").value, e[a].tipo = document.querySelector("#tipoModal").value, e[a].tiempo = document.querySelector("#tiempoModal").value, e[a].precio = document.querySelector("#precioModal").value, e[a].imagen = document.querySelector("#imagenModal").value, cargarTabla(), myModal.hide() }, cargarTabla = () => {
  cuerpoTabla.innerHTML = "", e.map(e => {
    let t = document.createElement("tr"), a = `<th>${e.gift}</th>
        <td class="text-white">${e.tipo}</td>
        <td class="text-white">${e.tiempo}</td>
        <td class="text-white">$${e.precio}</td>
        <td>
        <div class="d-flex gap-2">
        <button class="btn btn-outline-warning" onclick="mostrarModal(${e.id})"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button class="btn btn-outline-danger" onclick="borrarGift(${e.id})"><i class="fa fa-times text-white" aria-hidden="true"></i></button>
        </div>
        </td>
        `; t.innerHTML = a, cuerpoTabla.append(t)
  })
}, agregarGift = a => { a.preventDefault(); let r = e.at(-1).id + 1, l = document.querySelector("#gift").value, i = document.querySelector("#tipo").value, o = document.querySelector("#tiempo").value, d = document.querySelector("#precio").value, u = document.querySelector("#imagen").value; e.push(new t(r, l, i, o, d, u)), document.querySelector("#formGift").reset(), cargarTabla() }; window.borrarGift = t => { let a = e.findIndex(e => e.id == t); confirm(`Est\xe1 seguro/a que quiere eliminar la gift card ${e[a].gift}?`) && (e.splice(a, 1), cargarTabla()) }, cargarTabla(), document.querySelector("#formGift").addEventListener("submit", agregarGift), document.querySelector("#formModal").addEventListener("submit", giftUpdate);