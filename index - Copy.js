let header = document.getElementById('change')
window.onscroll = function(){
    const scroller = window.scrollY;
    let header = document.getElementById('change')
    if (scroller > 150){
        header.style.backgroundColor = 'RGB(0, 0, 0, .5)'
    } else {
        header.style.backgroundColor = 'transparent'
    }
}