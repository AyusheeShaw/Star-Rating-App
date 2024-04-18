// Using Event Delegation
const stars = document.querySelector(".stars");
const star = document.querySelectorAll(".star");

stars.addEventListener("click", (e) => {
    // const parent = e.target.parentElement;
    if (e.target.classList.includes("star")) {
        const value = e.target.getAttribute("data-value");
        // console.log(e.target.getAttribute("data-value"));
        rating.innerText = value;
        updatestar(value);
    }
});

stars.addEventListener("mouseover", (e) => {
    const value = e.target.getAttribute("data-value");
    // console.log(e.target.getAttribute("data-value"));
    rating.innerText = value;
    updatestar(value);
});
function updatestar(value) {
    star.forEach((ele) => {
        if (ele.getAttribute("data-value") <= value) {
            // Can use the 2 lines
            // const starValue=parseInt(ele.getAttribute("data-value"));
            // ele.classList.toggle("filled", starValue<=value);
            //toggle method use to toggle the class value that is here filled it will add filled and remove filled in the class

            ele.style.color = "goldenrod";
        } else {
            ele.style.color = "";
        }
    });
}
/*
//Normal way of addinf Event to Each star
const stars = document.querySelectorAll(".star");
stars.forEach((element) => {
    element.addEventListener("click", (e) => {
        const value = e.target.getAttribute("data-value");
        // console.log(e.target.getAttribute("data-value"));
        rating.innerText = value;
        updatestar(value);
    });

    element.addEventListener("mouseover", (e) => {
        const value = e.target.getAttribute("data-value");
        // console.log(e.target.getAttribute("data-value"));
        rating.innerText = value;
        updatestar(value);
    });
});
function updatestar(value) {
    stars.forEach((ele) => {
        if (ele.getAttribute("data-value") <= value) {
            // Can use the 2 lines
            // const starValue=parseInt(ele.getAttribute("data-value"));
            // ele.classList.toggle("filled", starValue<=value);
            //toggle method use to toggle the class value that is here filled it will add filled and remove filled in the class

            ele.style.color = "goldenrod";
        } else {
            ele.style.color = "";
        }
    });
}

*/
