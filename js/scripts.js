/*!
* Start Bootstrap - New Age v6.0.4 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
// const shareBtn = document.querySelector('.share-btn');
// const shareOptions = document.querySelector('.share-options');

// shareBtn.addEventListener('click', () => {
//     shareOptions.classList.toggle('active');
// })
// window.onload = function() {
//     fb_share.href ='http://www.facebook.com/share.php?u=' + encodeURIComponent(location.href); 
// }   

var purecookieTitle="Cookies.",
purecookieDesc="Utilizamos cookies e ao seguir navegando, você concorda com as condições descritas em nossa",
purecookieLink='<a href="#" data-toggle="modal" data-target="#exampleModal">Política de Privacidade</a>',
purecookieButton="OK";

function pureFadeIn(e,o){
    var i=document.getElementById(e);
    i.style.opacity=0,i.style.display=o||"block",
    
    function e(){
        var o=parseFloat(i.style.opacity);
        (o+=.02)>1||(i.style.opacity=o,requestAnimationFrame(e))}()
    }
    function pureFadeOut(e){
        var o=document.getElementById(e);
        o.style.opacity=1,
        function e(){(o.style.opacity-=.02)<0?o.style.display="none":requestAnimationFrame(e)}()
    }
    function setCookie(e,o,i){var t="";if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),t="; expires="+n.toUTCString()}document.cookie=e+"="+(o||"")+t+"; path=/"}function getCookie(e){for(var o=e+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}return null}function eraseCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}function cookieConsent(){getCookie("purecookieDismiss")||(document.body.innerHTML+='<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>'+purecookieTitle+'</a></div><div class="cookieDesc"><p>'+purecookieDesc+" "+purecookieLink+'<span class="btn btn-primary rounded-pill px-3 mb-2 ml-5 cookie share-btn"><a onClick="purecookieDismiss();">'+purecookieButton+"</a></span></p></div></div>",pureFadeIn("cookieConsentContainer"))}function purecookieDismiss(){setCookie("purecookieDismiss","1",7),pureFadeOut("cookieConsentContainer")}window.onload=function(){cookieConsent()};

