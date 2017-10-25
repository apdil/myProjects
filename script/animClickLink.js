let ancre = document.querySelectorAll('.ancre');


ancre.forEach(function (link, item) {

    link.addEventListener('mousedown', function () {
        // create clone of active section
        let sectionDouble = sectionActive(window.location.href);
        console.log(window.location.href)
        console.log(sectionActive(window.location.href))
        let sectionMooved = document.importNode(sectionDouble, true);
        // declar new id to avoid err in firefox
        sectionMooved.id = 'sectionMooved';
        // initialize new transition
        sectionMooved.classList.add('sectionClone');
        document.querySelector('main').appendChild(sectionMooved);


        let main = document.querySelector('main')
        main.classList.add('mainTransition');


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


        // RIBBON ANIMATION

        let ribbon = document.querySelector('#animationOnClick');

        ribbonAnim(ribbon, item)


        // H2 ANIMATION

        let sectionClick = sectionActive(link.href);
        let h2 = sectionClick.querySelector('h2');

        h2.classList.add('animeH2')
        h2.addEventListener('animationend', function () {
            h2.classList.add('afterAnimeH2')
            h2.classList.remove('animeH2')
        })


        // // IMG
        // let img = sectionClick.querySelector('img');

        // img.classList.add('imgTrans');
        // setTimeout(function () {
        //     img.classList.add('imgTrans2');
        // })

        // // IMG 2
        // let img2 = sectionClick.querySelector('.rogned');
        // img2.classList.add('imgRogned')
        // setTimeout(function () {
        //     img2.classList.add('imgRogned2');
        // })


        // UL
        let ul = sectionClick.querySelector('.toolsProject');

        ul.classList.add('animeUl');
        ul.addEventListener('animationend', function () {
            ul.classList.add('afterAnimeUl');
            ul.classList.remove('animeUl');
        })

    });
});

function sectionActive(url) {
    if (url === 'http://localhost/portFolio/c/myProjects/index.php') {
        return document.querySelector('#Meetup');
    }
    for (let ancre of tabAncre) {
        if (url === 'http://localhost/portFolio/c/myProjects/index.php' + ancre) {
            return document.querySelector(ancre);
        }
    }
}

function ancreActive(url) {
    for (let ancre of tabAncre) {
        if (url === 'http://localhost/portFolio/c/myProjects/index.php' + ancre) {
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

function ribbonAnim(element, index) {

    element.classList = 'animeRibbon';
    element.style.backgroundColor = 'rgb(' + tabColor[index].color1 + ','
        + tabColor[index].color2 + ',' + tabColor[index].color3 + ')';

    element.addEventListener('animationend', function () {
        element.classList.remove('animeRibbon');
    })
}

// color of letter
function letterColor2(element, letterIndex, color) {
    element.innerHTML = element.innerHTML.replace(letterIndex,
        '<span style="color:' + color + '">' + letterIndex + '</span>');
}
function letterColor(element, letterIndex, colorObj) {
    element.innerHTML = element.innerHTML.replace(letterIndex,
        '<span style="color:' + 'rgb(' + colorObj.color1 +
        ',' + colorObj.color2 + ',' + colorObj.color3 + ')' + '">' + letterIndex + '</span>');
}