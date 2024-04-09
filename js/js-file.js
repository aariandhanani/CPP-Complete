window.addEventListener("load", function() {
	console.log("Window open");
});

document.querySelector("#night").addEventListener("click", function() {
    console.log(document.body.style.backgroundColor);
    if (document.body.style.backgroundColor == "" || document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "#2d1f5b";
        console.log("changed to night");
    }
    else {
        document.body.style.backgroundColor = "white";
        console.log("changed to day");
    }
    console.log(document.body.style.backgroundColor);
});