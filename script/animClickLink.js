let ancre = document.querySelectorAll('.ancre');


ancre.forEach(function (link, item) {
    link.addEventListener('click', function (e) {

        //return element section Active
        let section = sectionActive(window.location.href);
        //create clone element for animation
        let animSection = section.cloneNode(true);
        document.body.querySelector('main').appendChild(animSection);
        animSection.classList.add('sectionClone');

        setTimeout(function () {
            animSection.classList.add('sectionTransition');
            animSection.addEventListener('transitionend', function () {
                document.body.querySelector('main').removeChild(animSection);
            });
        }, 0.01)


        // title animation:
        let titleAnim = document.querySelector('#titleAnim');
        titleAnim.textContent = link.innerHTML
        titleAnim.classList = 'titleTransition';
        setTimeout(function () {
            titleAnim.classList = 'titleTransition2';
            titleAnim.addEventListener('transitionend', function () {
                if (document.querySelector('.titleTransition2') === null) {
                    return;
                }
                titleAnim.innerHTML = "";
            })
        }, 0.01)



        let animation = document.querySelector('#animationOnClick');

        animation.classList = 'transition fixed';
        animation.style.display = 'block';

        setTimeout(function () {
            animation.classList = 'transition2 fixed';
            animation.style.backgroundColor = 'rgb(' + tabColor[item].color1 + ','
                + tabColor[item].color2 + ',' + tabColor[item].color3 + ')';
            animation.addEventListener('transitionend', function () {
                setTimeout(function () {
                    animation.classList = 'transition3 fixed';
                    animation.style.backgroundColor = 'rgb(' + tabColor[item].color1
                        + ',' + tabColor[item].color2 + ',' + tabColor[item].color3 + ')';
                    // a revoir erreur sur le nombre de fois ou le code est executer
                    animation.addEventListener('transitionend', function () {
                        if (document.querySelector('.transition3') === null) {
                            return;
                        }
                        document.querySelector('.transition3').style.display = 'none';
                    });
                }, 0.01)
            })
        }, 0.01)


        //     let styleTab = document.styleSheets;

        //     styleTab[0].insertRule('@keyframes present {' + 
        //         '0% {top: 100%; height: 100vh; width: 100%;background-color:rgb(' + tabColor[item].color1 +
        //  ',' + tabColor[item].color2 + ',' + tabColor[item].color3 + ');}' +
        //         '60% {top: 0%; height: 100vh; width: 100%;}' +
        //         '100% {top: 40%; height: 40vh; width: 100%;background-color:rgb(' + tabColor[item].color1 +
        //  ',' + tabColor[item].color2 + ',' + tabColor[item].color3 + ');}', styleTab[0].cssRules.length);
        //     console.log(styleTab[0].cssRules[36].name);


        //     document.querySelector('#animationOnClick').style.display = 'block';
        //     document.querySelector('#animationOnClick').classList = 'fixed animate';

        //     document.querySelector('.animate').addEventListener('animationend', function () {
        //         document.querySelector('#animationOnClick').classList.remove('animate');
        //         document.querySelector('#animationOnClick').style.display = 'none';
        //         styleTab[0].deleteRule(styleTab[0].cssRules.length - 1);
        //     });
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