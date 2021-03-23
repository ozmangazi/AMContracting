//-------------------------Hamburger--------------------------
const topbun = document.querySelector('.topbun');
const middlebun = document.querySelector('.middlebun');
const bottombun = document.querySelector('.bottombun');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    topbun.classList.toggle('activetop');
    middlebun.classList.toggle('activemiddle');
    bottombun.classList.toggle('activebottom');
});


//---------------------------Mobile Nav------------------------------

const mobileNavContainer = document.querySelector('.mobile-nav-container');

hamburger.addEventListener('click', function() {
    mobileNavContainer.classList.toggle('mobile-nav-active');
});

//---------------------------Digger Observer--------------------------
const words = document.querySelectorAll(".words");

const diggertextobserveroptions = { 
    rootMargin: "250px",
    threshold: 0,
};

const diggertextobserver = 
    new IntersectionObserver(function(entries, diggertextobserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("fadedwordsdigger");
                diggertextobserver.unobserve(entry.target);
           }
               
        })      
    }, diggertextobserveroptions);

words.forEach(word => {
    diggertextobserver.observe(word);
})

//---------------------------Bobcat Observer--------------------------
const bobcats = document.querySelectorAll(".bobcat");

const bobcatoptions = {
    root: document.viewport,
    rootmargin: "0px 0px -200px 0px",
    threshold: 1,
}

const bobcatobserver = 
    new IntersectionObserver(function(entries, bobcatobserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("fadecat");
                bobcatobserver.unobserve(entry.target);
           }
               
        })      
    }, bobcatoptions);

    bobcats.forEach(bobcat => {
        bobcatobserver.observe(bobcat);
})


//---------------------------List Observer--------------------------
const listitems = document.querySelectorAll(".list-item");

const listoptions = {
    root: document.viewport,
    rootmargin: "0px 0px -200px 0px",
    threshold: 1,
}

const listobserver = 
    new IntersectionObserver(function(entries, listobserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("fadelist");
                listobserver.unobserve(entry.target);
           }
               
        })      
    }, listoptions);

    listitems.forEach(listitem => {
    listobserver.observe(listitem);
})

//---------------------------Greater Than Icon Observer--------------------------

const icons = document.querySelectorAll(".fas");
const iconoptions = {
    root: document.viewport,
    rootmargin: "0px 0px -200px 0px",
    threshold: 1,
}

const iconobserver = 
    new IntersectionObserver(function(entries, iconobserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("fadeicon");
                iconobserver.unobserve(entry.target);
           }
               
        })      
    }, iconoptions);

    icons.forEach(icon => {
        iconobserver.observe(icon);
})

//---------------------------About Button Observer--------------------------

const aboutbtn = document.querySelector(".aboutbtn");
const aboutbuttonoptions = {
    root: document.viewport,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
}

const aboutButtonObserver = 
    new IntersectionObserver(function(entries, aboutButtonObserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("aboutbtnfade");
                aboutButtonObserver.unobserve(entry.target);
           }
               
        })      
    }, aboutbuttonoptions);

        
    aboutButtonObserver.observe(aboutbtn);

//---------------------------Services Button Observer--------------------------

    
const servicesbtn = document.querySelector(".servicesbtn");
const servicesbuttonoptions = {
    root: document.viewport,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
}

const servicesButtonObserver = 
    new IntersectionObserver(function(entries, servicesButtonObserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("servicesbtnfade");
                servicesButtonObserver.unobserve(entry.target);
           }
               
        })      
    }, servicesbuttonoptions);

        
    servicesButtonObserver.observe(servicesbtn);