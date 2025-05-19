let search_btn=document.querySelector("#searchbtn");

search_btn.addEventListener("click",()=>{
    alert("Searching menu!!")
})

let privacy_policy=document.querySelector("#privacy")
let pp=document.querySelector("#pp")

privacy_policy.addEventListener("click",()=>{
    pp.style.visibility="visible";
    Terms.style.visibility="hidden";
})

let terms_conditions=document.querySelector("#T_C")
let Terms=document.querySelector("#Terms")

terms_conditions.addEventListener("click",()=>{
    Terms.style.visibility="visible";
    pp.style.visibility="hidden";
})


// let searchbox=document.querySelector("#text")

// searchBox.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//       alert("You pressed Enter!");
//     }
//   });
