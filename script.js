// =========================
// MOBILE MENU TOGGLE
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// =========================
// FAQ ACCORDION
// =========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {
            if(faq !== item){
                faq.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});

// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){
        topBtn.style.display = "flex";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 100){
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
    }else{
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }

});

// =========================
// SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.1
});

const hiddenElements = document.querySelectorAll(
".about-section, .counter-section, .categories-section, .featured-products, .brands-section, .applications-section, .why-us-section, .reviews-section, .faq-section, .contact-section"
);

hiddenElements.forEach((el)=>{
    observer.observe(el);
});

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(
".stat-card h3, .counter-card h3"
);

const speed = 100;

counters.forEach(counter => {

    const updateCount = () => {

        const target =
        parseInt(counter.innerText);

        const count =
        parseInt(counter.innerText) || 0;

        const increment =
        Math.ceil(target / speed);

        if(count < target){

            counter.innerText =
            count + increment;

            setTimeout(updateCount,20);

        }else{

            counter.innerText =
            target + "+";

        }

    };

});

// =========================
// CONTACT FORM DEMO
// =========================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank You! Your inquiry has been submitted successfully."
);

form.reset();

});

}
