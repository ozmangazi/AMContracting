//---------------------------People Words Observer--------------------------
const peoples = document.querySelectorAll(".people");

const peoplewordsoptions = { 
    rootMargin: "250px",
    threshold: 0,
};

const peopletextobserver = 
    new IntersectionObserver(function(entries, peopletextobserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("peoplefade");
                peopletextobserver.unobserve(entry.target);
           }
               
        })      
    }, peoplewordsoptions);

    peoples.forEach(people => {
    peopletextobserver.observe(people);
})

//---------------------------Services Observer--------------------------

const serviceboxs = document.querySelectorAll(".servicesbox");

const serviceOptions = { 
    root: document.viewport,
    rootMargin: "0px",
    threshold: .5,
};

const serviceObserver = 
    new IntersectionObserver(function(entries, serviceObserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("servicesfade");
                serviceObserver.unobserve(entry.target);
           }
               
        })      
    }, serviceOptions);

    serviceboxs.forEach(servicebox => {
        serviceObserver.observe(servicebox);
    })

//---------------------------Item Observer--------------------------

const items = document.querySelectorAll(".item");

const itemOptions = { 
    root: document.viewport,
    rootMargin: "0px",
    threshold: .5,
};

const itemObserver = 
    new IntersectionObserver(function(entries, itemObserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("itemfade");
                itemObserver.unobserve(entry.target);
           }
               
        })      
    }, itemOptions);

    items.forEach(item => {
        itemObserver.observe(item);
    })

//---------------------------Line Observer--------------------------

const lines = document.querySelectorAll(".line");

const lineOptions = { 
    root: document.viewport, 
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
};

const lineObserver = 
    new IntersectionObserver(function(entries, lineObserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("lineanim");
                lineObserver.unobserve(entry.target);
           }
               
        })      
    }, lineOptions);

    lines.forEach(line => {
        lineObserver.observe(line);
    })

//---------------------------Career Observer--------------------------

const careers = document.querySelectorAll(".career");

const careerOptions = { 
    root: document.viewport, 
    rootMargin: "0px 0px 0px 0px",
    threshold: 1,
};

const careerObserver = 
    new IntersectionObserver(function(entries, careerObserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("careerfade");
                careerObserver.unobserve(entry.target);
           }
               
        })      
    }, careerOptions);

    careers.forEach(career => {
        careerObserver.observe(career);
    })

//---------------------------Contactbtn Observer--------------------------

const contactbtn = document.querySelector(".contactbtn");

const contactOptions = { 
    root: document.viewport, 
    rootMargin: "0px 0px 200px 0px",
    threshold: 1,
};

const contactObserver = 
    new IntersectionObserver(function(entries, contactObserver) {
        entries.forEach(entry => {
           if (!entry.isIntersecting) {
            return;
           } else {
                entry.target.classList.add("contactbtnfade");
                contactObserver.unobserve(entry.target);
           }
               
        })      
    }, contactOptions);

    contactObserver.observe(contactbtn);