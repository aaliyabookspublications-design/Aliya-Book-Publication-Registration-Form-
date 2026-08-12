/* ===================================
   Aaliya Book Publication
   script.js - Part 3A
=================================== */

// =========================
// DOM Elements
// =========================

const welcome = document.getElementById("welcome");
const landing = document.getElementById("landing");

const continueBtn = document.getElementById("continueBtn");

const websiteBtn = document.getElementById("websiteBtn");
const telegramBtn = document.getElementById("telegramBtn");
const whatsappBtn = document.getElementById("whatsappBtn");

// =========================
// Restore Session
// =========================

if(localStorage.getItem("abp_eligible") === "yes"){

welcome.style.display="none";

landing.style.display="flex";

if(typeof fbq !== "undefined"){
fbq("track","ViewContent");
}

}

// =========================
// Continue Button
// =========================

continueBtn.addEventListener("click",()=>{

localStorage.setItem("abp_eligible","yes");

welcome.style.opacity="0";

setTimeout(()=>{

welcome.style.display="none";

landing.style.display="flex";

landing.style.animation="fadeHero .7s ease";

if(typeof fbq !== "undefined"){

fbq("track","ViewContent");

}

},500);

});

// =========================
// Website Lead Event
// =========================

websiteBtn.addEventListener("click",()=>{

if(typeof fbq !== "undefined"){

fbq("track","Lead",{

value:2,

currency:"INR"

});

}

});

// =========================
// Telegram Contact Event
// =========================

telegramBtn.addEventListener("click",()=>{

if(typeof fbq !== "undefined"){

fbq("track","Contact");

}

});

// =========================
// WhatsApp Contact Event
// =========================

whatsappBtn.addEventListener("click",()=>{

if(typeof fbq !== "undefined"){

fbq("track","Contact");

}

});
/* ===================================
   Part 3B
   Advanced Tracking
=================================== */

// =========================
// URL Parameters
// =========================

const urlParams = new URLSearchParams(window.location.search);

// Facebook Click ID
const fbclid = urlParams.get("fbclid");

if (fbclid) {
    localStorage.setItem("fbclid", fbclid);
}

// UTM Parameters
const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term"
];

utmKeys.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
        localStorage.setItem(key, value);
    }
});

// =========================
// Time On Page
// =========================

setTimeout(() => {

    if (typeof fbq !== "undefined") {

        fbq("trackCustom", "TimeOnPage30Seconds");

    }

}, 30000);

// =========================
// Scroll Tracking
// =========================

let scroll25 = false;
let scroll50 = false;
let scroll75 = false;
let scroll100 = false;

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const percent = (scrollTop / pageHeight) * 100;

    if (percent >= 25 && !scroll25) {

        scroll25 = true;

        if (typeof fbq !== "undefined") {

            fbq("trackCustom", "Scroll25");

        }

    }

    if (percent >= 50 && !scroll50) {

        scroll50 = true;

        if (typeof fbq !== "undefined") {

            fbq("trackCustom", "Scroll50");

        }

    }

    if (percent >= 75 && !scroll75) {

        scroll75 = true;

        if (typeof fbq !== "undefined") {

            fbq("trackCustom", "Scroll75");

        }

    }

    if (percent >= 100 && !scroll100) {

        scroll100 = true;

        if (typeof fbq !== "undefined") {

            fbq("trackCustom", "Scroll100");

        }

    }

});

// =========================
// Console Welcome
// =========================

console.log("Aaliya Book Publication Landing Page Loaded");

// =========================
// Page Ready
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});