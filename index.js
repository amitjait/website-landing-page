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

const leftButton = document.getElementById('servbutLeft');
console.log(leftButton);
const rightButton = document.getElementById('servbutright');
console.log(rightButton);
const services = document.getElementsByClassName('serv');

console.log(services);

function left(){
    for(var i = 0; i<services.length; i++){
        // console.log(i);
        if(services[i].classList.contains('active')){

            services[i].classList.remove('active');

            if(i != 0){
                services[i-1].classList.add('active');
            }else{
                services[services.length-1].classList.add('active');
            }

            break;
        }
        
    }
}

function right(){
    for(var i = 0; i<services.length; i++){
        console.log(i);
        if(services[i].classList.contains('active')){
            services[i].classList.remove('active');

            if(i < services.length-1){
                services[i+1].classList.add('active');
            }else{
                services[0].classList.add('active');
            }

            break;
        }
        
    }
}

