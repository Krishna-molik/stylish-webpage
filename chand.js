let leftcity = document.getElementById('city-left');
let rightcity = document.getElementById('city-right');
let moon = document.getElementById('moon');
let RCC = document.querySelector('#RCC');

window.addEventListener('scroll',function(){
    let scrollvalue= window.scrollY;
    let maxscroll= this.document.querySelector('section').offsetHeight;
    if(scrollvalue <= maxscroll){
    leftcity.style.right = scrollvalue * 1.3 + "px";
    rightcity.style.left = scrollvalue * 1.3 + "px";
    moon.style.top = scrollvalue * 1.5 + "px";
    RCC.style.marginTop = scrollvalue * 0.6 + "px";
}
});

