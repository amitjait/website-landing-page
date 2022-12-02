// function jumpTo(anchor){
//     window.location.href = "#"+anchor;
    
// }

function jumpTo(anchor){
    let e = document.getElementById(anchor);

    e.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
}