//step 1: get DOM
// Anda harus menemukan elemennya terlebih dahulu. Ada beberapa cara untuk melakukan ini: Kata let
// Variabel yang dideklarasikan letmemiliki Block Scope
// Variabel yang dideklarasikan dengan letharus dideklarasikan sebelum digunakan
// Variabel yang dideklarasikan dengan lettidak dapat dideklarasikan ulang dalam lingkup yang sama
// Metode ini getElementById()adalah salah satu metode yang paling umum di DOM HTML. Ini digunakan hampir setiap kali Anda ingin membaca atau mengedit elemen HTML.




let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

// querySelector untuk mengambil elemen nama class css
let gambarDom = document.querySelector('.gambar');
let SliderDom = gambarDom.querySelector('.gambar .list');
let thumbnailBorderDom = document.querySelector('.gambar .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.gambar .time');


// Memindahkan item dari satu daftar ke daftar lainnya:
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;
let timeAutoNext = 9000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.gambar .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.gambar .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        gambarDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        gambarDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        gambarDom.classList.remove('next');
        gambarDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}