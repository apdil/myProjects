let ribbons = document.querySelectorAll('.bande');
let x = 0;

// put multiple background color in ribbon
ribbons.forEach(function (ribbon) {
// tabColor in tab.js
    backgroundColor(ribbon, tabColor[x]);
    x++;
    if(x === tabColor.length){
        x = 0;
    }
});

function backgroundColor(element, colorObj){
    element.style.backgroundColor = 'rgb(' + colorObj.color1 +
     ',' + colorObj.color2 + ',' + colorObj.color3 + ')';
}