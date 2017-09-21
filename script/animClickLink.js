let ancre = document.querySelectorAll('.ancre');


ancre.forEach(function (link, item) {
    link.addEventListener('click', function (e) {

        //TRANSLATE SECTION ON TOP AFTER CLICK ON LINK

        //return element section Active
        let section = sectionActive(window.location.href);
        //create clone element for transition
        let animSection = section.cloneNode(true);
        document.body.querySelector('main').appendChild(animSection);
        //initialize a class of new section who used for transition
        animSection.classList.add('sectionClone');

        //activation transition
        setTimeout(function () {
            sectionActiveTransition(animSection);
        }, 0.01)



        // TITLE OF PROJECT ON TRANSITION

        let titleAnim = document.querySelector('#titleAnim');

        // get name of project in link property
        titleAnim.textContent = link.innerHTML
        //initialize a class for title
        titleAnim.classList = 'titleTransition';
        setTimeout(function () {
            titleTransition(titleAnim);
        }, 0.01)


        
        // RIBBON TRANSITION WITH 3 STEP (3 TANSITION)

        let ribbon = document.querySelector('#animationOnClick');

        //initialize a class for ribbon
        ribbon.classList = 'transition fixed';
        ribbon.style.display = 'block';

        setTimeout(function () {
            ribbonTransition(ribbon, item);
        }, 0.01)

    });
});

function sectionActive(url) {
    for (let ancre of tabAncre) {
        if (url === 'http://localhost/portFolio/myProjects/index.php' + ancre) {
            return document.querySelector(ancre);
        }
    }
}

function ancreActive(url) {
    for (let ancre of tabAncre) {
        if (url === 'http://localhost/portFolio/myProjects/index.php' + ancre) {
            return ancre;
        }
    }
}

function sectionActiveTransition(element) {
    element.classList.add('sectionTransition');
    element.addEventListener('transitionend', function () {
        //delete section after transition
        document.body.querySelector('main').removeChild(element);
    });
}

function titleTransition(element) {
    element.classList = 'titleTransition2';
    let i = 0;
    element.addEventListener('transitionend', function () {
        // condition for run transitionend only one time
        if (i === 0) {
            if (document.querySelector('.titleTransition2') === null) {
                return;
            }
            // title disapears
            element.innerHTML = "";
            i++;
        }
    })
}

function ribbonTransition(element, index) {
    element.classList = 'transition2 fixed';
    //set a backgroundColor to color of active section
    element.style.backgroundColor = 'rgb(' + tabColor[index].color1 + ','
        + tabColor[index].color2 + ',' + tabColor[index].color3 + ')';

    element.addEventListener('transitionend', function () {
        let i = 0;
        // condition for run transitionend only one time
        if (i === 0) {
            setTimeout(function () {
                element.classList = 'transition3 fixed';

                // a revoir erreur sur le nombre de fois ou le code est executer
                let i = 0;
                element.addEventListener('transitionend', function () {
                    if (i === 0) {

                        if (document.querySelector('.transition3') === null) {
                            return;
                        }
                        document.querySelector('.transition3').style.display = 'none';
                    }
                });
            }, 0.01)
            i++;
        }
    })
}