window.onload = function () {
   // document.getElementById('layout-100vh').classList.add("anim-start-header");
    console.log("%c- PiSi Dizajn Alex - Web Razvoj, Web Progresive App With HTML5, CSS3, Javascript, PHP&MySQL, Yii2-framework ", "color:#286da8; font-size:30px");
}

window.onscroll = function () {
    var anav = document.getElementById("nav-bar");
    var anavsub = document.getElementById("anav-sub");
    var gototop = document.getElementById("go-to-top");
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    console.log(top)
    if (top <= 229) {
       // document.getElementById('layout-100vh').classList.add("anim-start-header");
        //gototop.classList.remove("show-up");
        if (anavsub) {
           // anavsub.classList.remove("shadow-down");
        }
       // anav.classList.remove("shadow-down");

    } else {
        document.getElementById('layout-100vh').classList.remove("anim-start-header");
        gototop.classList.add("show-up");
       // anav.classList.add("shadow-down");
        if (anavsub) {
           // anavsub.classList.add("shadow-down");
        }

    }
    setTimeout(timeScoll, 1000);
    function timeScoll() {
        if (anavsub) {
           // anavsub.style.top = top + 10 + "px";
        }
        anav.style.top = top + 10 + "px";

    }
}

/*
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}
*/
/*
window.onscroll = function () {
    var anav = document.getElementById("anav");
    var anavsub = document.getElementById("anav-sub");
    var gototop = document.getElementById("go-to-top");
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top <= 229) {
        document.getElementById('layout-100vh').classList.add("anim-start-header");
        gototop.classList.remove("show-up");
        if (anavsub) {
            anavsub.classList.remove("shadow-down");
        }
        anav.classList.remove("shadow-down");

    } else {
        document.getElementById('layout-100vh').classList.remove("anim-start-header");
        gototop.classList.add("show-up");
        anav.classList.add("shadow-down");
        if (anavsub) {
            anavsub.classList.add("shadow-down");
        }

    }
    setTimeout(timeScoll, 1000);
    function timeScoll() {
        if (anavsub) {
            anavsub.style.top = top + 10 + "px";
        }
        anav.style.top = top + 10 + "px";

    }
}
*/
function goToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

function openMyMenu(id) {
    var animenu = document.getElementById(id);
    if (animenu.classList.contains('opened-menu')) {
        animenu.classList.remove('opened-menu');
    } else {
        animenu.classList.add('opened-menu');
    }
}


function openMyDdMenu() {
    var ddMenu = document.getElementById("drop-down");
    if (ddMenu.classList.contains('opened-dd-menu')) {
        ddMenu.classList.remove('opened-dd-menu');
    } else {
        ddMenu.classList.add('opened-dd-menu');
    }
}

