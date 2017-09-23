let ancre = document.querySelectorAll('.ancre');


ancre.forEach(function (link, item) {

    link.addEventListener('mousedown', function () {
        // create clone of active section
        let sectionDouble = sectionActive(window.location.href);
        let sectionMooved = sectionDouble.cloneNode(true);
        // declar new id to avoid err in firefox
        sectionMooved.id = 'sectionMooved';
        // initialize new transition
        sectionMooved.classList.add('sectionClone');
        document.querySelector('main').appendChild(sectionMooved);
    })

    link.addEventListener('click', function (e) {

        //TRANSLATE SECTION ON TOP AFTER CLICK ON LINK
        let sectionMooved = document.querySelector('#sectionMooved');

        // transition debut
        sectionMooved.classList.add('sectionTransition')
        let i = 0
        sectionMooved.addEventListener('transitionend', function () {
            if (i === 0) {
                i++;
                // delete clone after transition
                document.querySelector('main').removeChild(sectionMooved);
            }
        })



        // TITLE OF PROJECT ON TRANSITION

        let titleAnim = document.querySelector('#titleAnim');

        // get name of project in link property

        titleAnim.textContent = link.innerHTML
        // change color of one letter
        let index = Math.round(titleAnim.textContent.length / 2);
        let letter = titleAnim.textContent[index];
        letterColor2(titleAnim, letter, "white");

        //initialize a class for title
        setTimeout(function () {
            titleTransition(titleAnim);
        }, 0.01)



        // RIBBON TRANSITION WITH 3 STEP (3 TANSITION)

        let ribbon = document.querySelector('#animationOnClick');

        ribbon.style.display = 'block';

        setTimeout(function () {
            ribbonTransition(ribbon, item);
        }, 0.01)

    });
});

function sectionActive(url) {
    for (let ancre of tabAncre) {
        if (url === 'http://localhost/portFolio/b/myProjects/index.php' + ancre) {
            return document.querySelector(ancre);
        }
    }
}

function ancreActive(url) {
    for (let ancre of tabAncre) {
        if (url === 'http://localhost/portFolio/b/myProjects/index.php' + ancre) {
            return ancre;
        }
    }
}

function sectionActiveTransition(element) {
    let i = 0;

    element.classList.add('sectionTransition');
    element.addEventListener('transitionend', function () {
        //delete section after transition
        if (i === 0) {
            i++;
            if (document.querySelector('.sectionTransition') === null) {
                return;
            }
            document.querySelector('main').removeChild(element);
            console.log(element)
        }
    });
}

function titleTransition(element) {
    let i = 0;
    element.classList.add('titleTransition2');
    element.addEventListener('transitionend', function () {
        // condition for run transitionend only one time
        if (i === 0) {
            i++;
            if (document.querySelector('.titleTransition2') === null) {
                return;
            }
            // title disapears
            element.innerHTML = '';
            element.classList.remove('titleTransition2');
        }
    })
}

function ribbonTransition(element, index) {
    //transitionend do mor time instruction so for instruction do only one time
    //i do condition
    let i = 0;
    let a = 0;

    element.classList.add('transitionRibbon2');
    //set a backgroundColor to color of active section
    element.style.backgroundColor = 'rgb(' + tabColor[index].color1 + ','
        + tabColor[index].color2 + ',' + tabColor[index].color3 + ')';

    element.addEventListener('transitionend', function () {
        // condition for run transitionend only one time
        if (i === 0) {
            i++;
            setTimeout(function () {
                element.classList.remove('transitionRibbon');
                element.classList.add('transitionRibbon3');
                element.addEventListener('transitionend', function () {
                    if (a === 0) {
                        a++;
                        if (document.querySelector('.transitionRibbon3') === null) {
                            return;
                        }
                        element.classList.remove('transitionRibbon2');
                        element.classList.remove('transitionRibbon3');
                        setTimeout(function () {
                            element.classList = 'transitionRibbon';
                        })
                    }
                });
            }, 0.01)
        }
    })
}

// color of letter
function letterColor2(element, letterIndex, color){
    element.innerHTML = element.innerHTML.replace(letterIndex,
         '<span style="color:' + color + '">'+ letterIndex +'</span>');
}
        function letterColor(element, letterIndex, colorObj){
    element.innerHTML = element.innerHTML.replace(letterIndex,
         '<span style="color:' + 'rgb(' + colorObj.color1 +
     ',' + colorObj.color2 + ',' + colorObj.color3 + ')' + '">'+ letterIndex +'</span>');
}