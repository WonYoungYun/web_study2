window.onload = function(){
    const mymap = document.getElementById('map')
    const latlng = new google.maps.LatLng(31.313465,126.1927522)
    const gmap = new google.maps.Map(
        mymap, {
            zoom:16,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        })
        const marker = new google.maps.Marker({
            position: latlng,
            map: gmap,
            title:'모노라움'
        })
        google.maps.event.addListener(marker, 'click', event=>{
            alert('모노라움')
        })
}


//menu
document.addEventListener("DOMContentLoaded", ()=>{
    const btn_nav = document.querySelector('.btn_nav')
    const header_lnb = document.querySelector('#header .lnb')

    const toggle = (el, prop, style1, style2) =>{
        el.style[prop] = el.style[prop] === style1 ? style2 : style1;
    }

    // btn_nav.addEventListener('click', e=>{
    //     toggle(header_lnb, 'display', 'none', 'block')
    // })
    btn_nav.addEventListener('click', e=>{
        toggle(header_lnb, 'opacity', '1', '0')
    })
})