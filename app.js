const WHATSAPP="5492216102965";
const INSTAGRAM="https://www.instagram.com/indioinformatica/";
const FEATURED=["apple-iphone-18-pro-256gb","macbook-pro-m5-14-16gb-1tb-10-cpu-10-gpu-espanol","apple-ipad-pro-m5-11-256gb","samsung-s26-ultra-12gb-256gb","nikon-z6-iii-body-espanol","sony-a6700-body","canon-r8-body","dji-osmo-pocket-4-creator-combo"];
let products=[];
const safe=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
const waLink=name=>"https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent("Hola Indio Informática, consulto por: "+name);
const norm=s=>String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
function keyFor(p){
 const c=norm(p.category), n=norm(p.name), b=norm(p.brand);
 if(c.startsWith("apple")||/iphone|ipad|macbook|mac mini|apple watch|airpods|pencil/.test(n)) return "apple";
 if(/camara|lente|sigma|tamron|nikon|canon|sony|godox|fotografia/.test(c+" "+n+" "+b)) return "foto";
 if(/notebook|laptop|macbook/.test(c+" "+n)) return "notebooks";
 if(/consola|playstation|xbox|nintendo|sim racing|gaming|joystick/.test(c+" "+n)) return "gaming";
 if(/dji|insta360|gopro|osmo|gimbal|estabilizador|microfono|micrófono|creator/.test(c+" "+n+" "+b)) return "creator";
 if(/jbl|parlante|audio|auricular|airpods|headphone/.test(c+" "+n+" "+b)) return "audio";
 if(/samsung|motorola|xiaomi|redmi|poco|celular|smartphone/.test(c+" "+n+" "+b)) return "celulares";
 if(/tablet|ipad/.test(c+" "+n)) return "tablets";
 return "accesorios";
}
const CATEGORIES=[
 {key:"apple",title:"Apple",desc:"iPhone · iPad · Mac · Watch · AirPods",tag:"APPLE",icon:""},
 {key:"celulares",title:"Celulares",desc:"Samsung · Motorola · Xiaomi · más",tag:"SMARTPHONES",icon:"01"},
 {key:"foto",title:"Fotografía",desc:"Cámaras · Lentes · Iluminación · Accesorios",tag:"FOTO & VIDEO",icon:"02"},
 {key:"notebooks",title:"Notebooks",desc:"Office · Estudio · Gaming",tag:"COMPUTACIÓN",icon:"03"},
 {key:"gaming",title:"Gaming",desc:"PlayStation · Xbox · Nintendo · Sim Racing",tag:"GAMING",icon:"04"},
 {key:"creator",title:"Creator",desc:"DJI · Insta360 · Gimbals · Audio",tag:"CREATOR",icon:"05"},
 {key:"audio",title:"Audio",desc:"JBL · Auriculares · Parlantes · Micrófonos",tag:"AUDIO",icon:"06"},
 {key:"accesorios",title:"Accesorios",desc:"Complementos para tus dispositivos",tag:"ACCESORIOS",icon:"07"}
];
function count(key){return products.filter(p=>keyFor(p)===key).length}
function renderCategories(){
 const grid=document.querySelector('#categoryGrid');
 grid.innerHTML=CATEGORIES.map(c=>`<button class="category-card" data-key="${c.key}"><div class="cat-top"><span>${c.tag}</span><i>${c.icon}</i></div><div><h3>${c.title}</h3><p>${c.desc}</p></div><div class="cat-bottom"><small>${count(c.key)} productos</small><b>Explorar →</b></div></button>`).join('');
 grid.querySelectorAll('.category-card').forEach(b=>b.addEventListener('click',()=>openCategory(b.dataset.key)));
}
function openCategory(key){
 const cat=CATEGORIES.find(c=>c.key===key); if(!cat)return;
 document.querySelector('#catalogo').hidden=false; document.querySelector('#categorias').hidden=true;
 document.querySelector('#catalogTitle').textContent=cat.title; document.querySelector('#catalogEyebrow').textContent=cat.tag;
 document.querySelector('#search').value=''; renderSubcategories(key); apply(key);
 document.querySelector('#catalogo').scrollIntoView({behavior:'smooth'});
}
function renderSubcategories(key){
 const row=document.querySelector('#subcategoryRow');
 const cats=[...new Set(products.filter(p=>keyFor(p)===key).map(p=>p.category.split(' > ').slice(1).join(' · ')).filter(Boolean))].sort();
 row.innerHTML=`<button class="sub active" data-sub="">Todos</button>`+cats.map(c=>`<button class="sub" data-sub="${safe(c)}">${safe(c)}</button>`).join('');
 row.querySelectorAll('.sub').forEach(b=>b.addEventListener('click',()=>{row.querySelectorAll('.sub').forEach(x=>x.classList.remove('active'));b.classList.add('active');apply(key,b.dataset.sub)}));
}
function render(list){
 const grid=document.querySelector('#productGrid');
 document.querySelector('#catalogCount').textContent=list.length+' productos';
 grid.innerHTML=list.length?list.map(p=>`<article class="product"><div class="product-image">${p.image?`<img loading="lazy" src="${safe(p.image)}" alt="${safe(p.name)}">`:`<div class="product-placeholder"><span>${safe(p.brand||'INDIO')}</span><strong>${safe(p.name)}</strong><small>Imagen oficial próximamente</small></div>`}</div><div class="product-info"><div class="product-brand">${safe(p.brand||'INDIO')}</div><div class="product-name">${safe(p.name)}</div><p class="product-desc">${safe(p.description||'')}</p>${p.specs?`<div class="product-specs">${safe(p.specs)}</div>`:''}<div class="product-status">${safe(p.status||'Consultar disponibilidad')}</div><div class="product-price">${safe(p.price_display||'Consultar')}</div><a class="product-wa" href="${waLink(p.name)}" target="_blank" rel="noopener">Consultar por WhatsApp →</a></div></article>`).join(''):`<div class="empty">No encontramos productos con esa búsqueda.</div>`;
}
function apply(key,sub=''){
 const q=norm(document.querySelector('#search').value);
 let list=products.filter(p=>keyFor(p)===key && (!q||norm(p.name).includes(q)||norm(p.brand).includes(q)||norm(p.category).includes(q)) && (!sub||p.category.split(' > ').slice(1).join(' · ')===sub));
 if(document.querySelector('#sort').value==='name')list.sort((a,b)=>a.name.localeCompare(b.name)); else list.sort((a,b)=>FEATURED.indexOf(b.slug)-FEATURED.indexOf(a.slug));
 render(list);
}
document.querySelector('#backCategories').addEventListener('click',()=>{document.querySelector('#catalogo').hidden=true;document.querySelector('#categorias').hidden=false;document.querySelector('#categorias').scrollIntoView({behavior:'smooth'});});
document.querySelector('#search').addEventListener('input',()=>{const title=document.querySelector('#catalogTitle').textContent;const key=CATEGORIES.find(c=>c.title===title)?.key;apply(key,document.querySelector('.sub.active')?.dataset.sub||'')});
document.querySelector('#sort').addEventListener('change',()=>{const title=document.querySelector('#catalogTitle').textContent;const key=CATEGORIES.find(c=>c.title===title)?.key;apply(key,document.querySelector('.sub.active')?.dataset.sub||'')});
document.querySelector('#searchBtn').addEventListener('click',()=>{document.querySelector('#categorias').scrollIntoView({behavior:'smooth'});setTimeout(()=>{document.querySelector('#search').focus()},500)});
const wa="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent("Hola Indio Informática, necesito asesoramiento para elegir un producto.");
document.querySelector('#waBtn').href=wa;document.querySelector('#waHeader').href=wa;document.querySelector('#heroWa').href=wa;document.querySelector('#floatingWa').href=wa;
fetch('products.json').then(r=>r.json()).then(d=>{products=d;renderCategories()}).catch(()=>document.querySelector('#categoryGrid').innerHTML='<div class="empty">No se pudo cargar el catálogo.</div>');
