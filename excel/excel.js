let installationLi = document.getElementById('installationLi');
let loginLi = document.getElementById('loginLi');
let apiKeyLi = document.getElementById('apiKeyLi');
let searchLi = document.getElementById('searchLi');
//let methodsLi = document.getElementById('methodsLi');
let indicators_latestLi = document.getElementById('IndicatorsLi');
//let indicators_historicalLi = document.getElementById('indicators-historicalLi');
let calendarLi = document.getElementById('calendarLi');
let marketsLi = document.getElementById('marketsLi');
let forecastsLi = document.getElementById('forecastsLi');
let historyLi = document.getElementById('historyLi');
let ratingsLi = document.getElementById('ratingsLi');
//let updatesLi = document.getElementById('updatesLi');
let refreshLi = document.getElementById('refreshLi');
let helpLi = document.getElementById('helpLi');


let marBtm;
//setVideoHeight();

//Go to the Categorie Selected in Web Page
installationLi.onclick = () => { window.location = 'index.html#installation'; }
loginLi.onclick = () => { window.location = 'index.html#login'; }
apiKeyLi.onclick = () => { window.location = 'index.html#apiKey'; }
searchLi.onclick = () => { window.location = 'index.html#search'; }
//methodsLi.onclick = () => { window.location = 'index.html#methods'; }
indicators_latestLi.onclick = () => { window.location = 'index.html#indicators-latest'; }
//indicators_historicalLi.onclick = () => { window.location = 'index.html#indicators-historical'; }
calendarLi.onclick = () => { window.location = 'index.html#calendar'; }
marketsLi.onclick = () => { window.location = 'index.html#markets'; }
forecastsLi.onclick = () => { window.location = 'index.html#forecasts'; }
historyLi.onclick = () => { window.location = 'index.html#history'; }
ratingsLi.onclick = () => { window.location = 'index.html#ratings'; }
//updatesLi.onclick = () => { window.location = 'index.html#updates'; }
refreshLi.onclick = () => { window.location = 'index.html#refresh'; }
helpLi.onclick = () => { window.location = 'index.html#help'; }

let colorBlue = '#185aa9';
    
function clearAllLiColors() {
    installationLi.style.backgroundColor = 'transparent';
    loginLi.style.backgroundColor = 'transparent';
    apiKeyLi.style.backgroundColor = 'transparent';
    searchLi.style.backgroundColor = 'transparent';
    //methodsLi.style.backgroundColor = 'transparent';
    indicators_latestLi.style.backgroundColor = 'transparent';
    //indicators_historicalLi.style.backgroundColor = 'transparent';
    calendarLi.style.backgroundColor = 'transparent';
    marketsLi.style.backgroundColor = 'transparent';
    forecastsLi.style.backgroundColor = 'transparent';
    ratingsLi.style.backgroundColor = 'transparent';
    historyLi.style.backgroundColor = 'transparent';
    //updatesLi.style.backgroundColor = 'transparent';
    refreshLi.style.backgroundColor = 'transparent';
    helpLi.style.backgroundColor = 'transparent';
}

//On scroll checks which categorie should be highlighted in the #mainMenu
$('#contentContainer').scroll(() => { 
    clearAllLiColors()
    if($('#installation').position().top <= 30) {
        clearAllLiColors()
        installationLi.style.backgroundColor = colorBlue;
    }
    if($('#login').position().top <= 30) {
        clearAllLiColors()
        loginLi.style.backgroundColor = colorBlue;
    }
    if($('#apiKey').position().top <= 30) {
        clearAllLiColors()
        apiKeyLi.style.backgroundColor = colorBlue;
    }
    if($('#search').position().top <= 30) {
        clearAllLiColors()
        searchLi.style.backgroundColor = colorBlue;
    }
    /*if($('#methods').position().top <= 0) {
        clearAllLiColors()
        methodsLi.style.backgroundColor = colorBlue;
    }*/
    if($('#indicators-latest').position().top <= 30) {
        clearAllLiColors()
        indicators_latestLi.style.backgroundColor = colorBlue;
    }
    /*if($('#indicators-historical').position().top <= 0) {
        clearAllLiColors()
        indicators_historicalLi.style.backgroundColor = colorBlue;
    }*/
    /*if($('#updates').position().top <= 0) {
        clearAllLiColors()
        updatesLi.style.backgroundColor = colorBlue;
    }*/
    if($('#calendar').position().top <= 30) {
        clearAllLiColors()
        calendarLi.style.backgroundColor = colorBlue;
    }
    if($('#markets').position().top <= 30) {
        clearAllLiColors()
        marketsLi.style.backgroundColor = colorBlue;
    }
    if($('#forecasts').position().top <= 30) {
        clearAllLiColors()
        forecastsLi.style.backgroundColor = colorBlue;
    }

    if($('#ratings').position().top <= 30) {
        clearAllLiColors()
        ratingsLi.style.backgroundColor = colorBlue;
    }
    if($('#history').position().top <= 30) {
        clearAllLiColors()
        historyLi.style.backgroundColor = colorBlue;
    }
    if($('#refresh').position().top <= 30) {
        clearAllLiColors()
        refreshLi.style.backgroundColor = colorBlue;
    }
    if($('#help').position().top <= 30) {
        clearAllLiColors()
        helpLi.style.backgroundColor = colorBlue;
    }
    //Setting sub categories of #methods visibility
    /*if($('#methods').position().top <= 0 && $('#refresh').position().top >= 0) {
        $('#mainMenu ul ul').css('height','202px');
    }
    else {
        $('#mainMenu ul ul').css('height','0px');
    }*/
})
//Hiding border
    /*
    if($('#mainMenu ul ul').css('height') == '0px') {
        $('#mainMenu ul ul').css('border','0px');
        console.log(0)
    }
    else {
        $('#mainMenu ul ul').css('border-width','1px');
        console.log(1)
    }*/
    

//Sub categories of #methods are hidden by default
$('#mainMenu ul ul').css('height','0px');
//$('#mainMenu ul ul').css('border','0px');

//Setting #mainMenu visibility for mobile devices; Click the burger to show the menu, click back to hide
$('#burger').click(() => {
    if ($('#mainMenu').css('visibility') == 'hidden' ) { 
        $('#mainMenu').css('visibility','visible');
    }
    else {
        $('#mainMenu').css('visibility','hidden');
    }
})

//Hide #mainMenu on click on outside de #mainMenu area (only on "mobile")
$('#contentContainer').click(() => {
    if(window.innerWidth < 790) {
        $('#mainMenu').css('visibility','hidden');
    }
})

//When user arrives on the web page if he is on a small screen hide #mainMenu
if(window.innerWidth < 790) { $('#mainMenu').css('visibility','hidden'); }

//On resize to "mobile" hide #mainMenu; On resize to "desktop" show #mainMenu
window.onresize = () => {
    if(window.innerWidth > 790) {
        $('#mainMenu').css('visibility','visible');
    }
    if(window.innerWidth <= 790) {
        $('#mainMenu').css('visibility','hidden');
    }

    //setVideoHeight();
}

//Making the height of the video responsive
/*function setVideoHeight() {
    marBtm = $('.iframeContainer').css('width').replace('px', '') / 1.8;
    $('.iframeContainer').css('padding-bottom', marBtm);
}*/

//Google Analytics to track from where the user got to TE Excel Add In v1 download
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

$('downloadLink').click(() => {
    ga('send', 'event', 'Data Request', 'Excel-Download');
    window.location = 'https://github.com/tradingeconomics/tradingeconomics/raw/master/Excel/All_Releases/ExcelAddInDeploy_latest.msi';
    return;
});