const WHATSAPP="5492216148446";
const FEATURED=["apple-iphone-18-pro-256gb", "macbook-pro-m5-14-16gb-1tb-10-cpu-10-gpu-espanol", "macbook-air-m5-13-16gb-512gb-10-cpu-8gpu", "apple-ipad-pro-m5-11-256gb", "samsung-s26-ultra-12gb-256gb", "nikon-z6-iii-body-espanol", "sony-a6700-body", "canon-r8-body", "dji-osmo-pocket-4-creator-combo", "joystick-ps5-colores-nuevos", "parlante-jbl-partybox-520", "notebook-gamer-asus-tuf-a16"];
let products=[];
const money=p=>p.price==null?"Consultar":(p.currency==="ARS"?"AR$ ":"USD ")+Number(p.price).toLocaleString("es-AR");
const baseCat=c=>(c||"Otros").split(" > ")[0];
const safe=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
function waLink(name){return "https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent("Hola Indio Informática, consulto por: "+name);}
function render(list){
 const grid=document.querySelector("#productGrid");
 document.querySelector("#catalogCount").textContent=list.length+" productos";
 grid.innerHTML=list.length?list.map(p=>`<article class="product"><a class="product-image" href="${p.image?safe(p.image):waLink(p.name)}" ${p.image?'target="_blank" rel="noopener"':''}>${p.image?`<img loading="lazy" src="${safe(p.image)}" alt="${safe(p.name)}">`:`<div class="product-placeholder"><span>${safe(p.brand||baseCat(p.category))}</span><strong>${safe(p.name)}</strong></div>`}</a><div class="product-info"><div class="product-brand">${safe(p.brand||baseCat(p.category))}</div><div class="product-name">${safe(p.name)}</div><div class="product-price">${money(p)}</div><div class="product-status">${safe(p.status||"")}</div><a class="product-wa" href="${waLink(p.name)}" target="_blank" rel="noopener">Consultar por WhatsApp →</a></div></article>`).join(""):"<div class='empty'>No encontramos productos con esa búsqueda.</div>";
}
function contactProduct(encoded){window.open(waLink(decodeURIComponent(encoded)),"_blank");return false}
function populate(){const s=document.querySelector("#categoryFilter");[...new Set(products.map(p=>baseCat(p.category)))].sort().forEach(c=>s.insertAdjacentHTML("beforeend",`<option>${safe(c)}</option>`));}
function apply(){
 const q=document.querySelector("#search").value.toLowerCase().trim(), c=document.querySelector("#categoryFilter").value, sort=document.querySelector("#sort").value;
 let list=products.filter(p=>(!q||p.name.toLowerCase().includes(q)||(p.brand||"").toLowerCase().includes(q)||(p.category||"").toLowerCase().includes(q))&&(!c||baseCat(p.category)===c));
 if(sort==="priceAsc")list.sort((a,b)=>(a.price??1e15)-(b.price??1e15));
 if(sort==="priceDesc")list.sort((a,b)=>(b.price??-1)-(a.price??-1));
 if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==="featured")list.sort((a,b)=>FEATURED.indexOf(b.slug)-FEATURED.indexOf(a.slug));
 render(list);
}
document.querySelector("#search").addEventListener("input",apply);
document.querySelector("#categoryFilter").addEventListener("change",apply);
document.querySelector("#sort").addEventListener("change",apply);
document.querySelectorAll(".category-card").forEach(b=>b.addEventListener("click",()=>{document.querySelector("#categoryFilter").value=b.dataset.category;document.querySelector("#catalogo").scrollIntoView();apply()}));
document.querySelector("#searchBtn").addEventListener("click",()=>{document.querySelector("#catalogo").scrollIntoView();setTimeout(()=>document.querySelector("#search").focus(),400)});
const wa="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent("Hola Indio Informática, necesito asesoramiento para elegir un producto.");
document.querySelector("#waBtn").href=wa;
document.querySelector("#waHeader").href=wa;
document.querySelector("#floatingWa").href=wa;
fetch("products.json").then(r=>r.json()).then(d=>{products=d;populate();apply()}).catch(()=>document.querySelector("#productGrid").innerHTML="<div class='empty'>No se pudo cargar el catálogo.</div>");
