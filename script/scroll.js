let projects = document.querySelector('#projects');
let divTop = document.querySelector('#scrollTop');
let divBot = document.querySelector('#scrollBot');


// scrollBottom.addEventListener('mouseover', function(){
//     window.scrollBy(0,window.innerHeight);
// });

divTop.addEventListener('mouseover', function(){
    let interval = setInterval(function(){
        projects.scrollTop += 1;
        divTop.addEventListener('mouseleave', function(){
            clearInterval(interval);
        })
    }, 3);
});

divBot.addEventListener('mouseover', function(){
    let interval = setInterval(function(){
        projects.scrollTop += -1;
        divBot.addEventListener('mouseleave', function(){
            clearInterval(interval);
        })
    }, 3);
});