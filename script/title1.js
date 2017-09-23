let title1 = document.querySelectorAll('.title1');
let i = 0;

title1.forEach(function(title){
    let index = Math.round(title.textContent.length / 2);
    let letter = title.textContent[index];

    letterColor(title, letter, tabColor[i]);
    i++;
    if(i === tabColor.length){
        i = 0;
    }
});

// return letter who be colored
function chooseLetter (element){
    let index = Math.round(element.textContent.length / 2);
    let letter = element.textContent[index];
}

function letterColor(element, letterIndex, colorObj){
    element.innerHTML = element.innerHTML.replace(letterIndex,
         '<span style="color:' + 'rgb(' + colorObj.color1 +
     ',' + colorObj.color2 + ',' + colorObj.color3 + ')' + '">'+ letterIndex +'</span>');
}