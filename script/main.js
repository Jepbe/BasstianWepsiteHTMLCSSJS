function unfoldMusic() {
    var x = document.getElementById("bottomBtn");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    var y = document.getElementById("btnDiv");
    if (y.style.bottom === "5rem") {
        y.style.bottom = "3rem";
    } else {
        y.style.bottom = "5rem"
    }

    // var z = document.getElementById("button");
    // if (z.style.transform = "rotate(270deg)") {
    //     z.style.transform = "rotate(180deg)";
    // } 
    // if (z.style.transform = "rotate(90deg)"); {
    //     z.style.transform = "rotate(180deg)"
    // }   
}


// links

///// wewewewewewewe
function imgLink() {
    window.location.href = "/"
}

function buyT() {
    window.location.href = "/butik"
}

function book() {
    window.location.href = "/kontakt"
}

function tiktok() {
    window.open( 
        "https://www.tiktok.com/@dj_basstian", "_blank" );
}

function soundcloud() {
    window.open(
        "https://soundcloud.com/bastian-nielsen-360664195", "_blank");
}
function instagram() {
    window.open(
        "https://www.instagram.com/dj_basstian/", "_blank");
}
function youtube() {
    window.open(
        "https://www.youtube.com/channel/UCFjgyN5rCfz8SNGd56Lyp3Q", "_blank");
}
function homePage() {
    window.location.href = "/";
}


// Open navbar

function navbarOpen() {
    var list = document.getElementById("navList");
    if (list.style.display === "block") {
        list.style.display = "none"
    } else {
        list.style.display = "block"
    }
}