

setInterval(()=>{
    d= new Date();
    htime= d.getHours();
    mtime= d.getMinutes();
    stime= d.getSeconds();

    hrotation= htime*30+ mtime/2;
    mrotation= mtime*6;
    srotation= stime*6;

    hr.style.transform= `rotate(${hrotation}deg)`;
    mn.style.transform= `rotate(${mrotation}deg)`;
    sc.style.transform= `rotate(${srotation}deg)`;
})
