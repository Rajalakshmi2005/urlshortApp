let ansbox;
let val;
let shortlink;
let user;
let fulldiv;
let inp;
let inpval;
function sortUrl() {
  inpval = document.getElementById("input");
  inp = document.getElementById("input").value;
  inpval.value = "";
  if (inp.startsWith("https://")) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${inp}`)
      .then(function (repeat) {
        return repeat.json();
      })
      .then(function (data) {
        val = data;
        shortlink = val.result.short_link;
        eleCreate(inp, shortlink);
      });
  } else {
    if (!inp.startsWith("https://")) {
      console.log("invalid");
      inpval = document.getElementById("input");
      let add = document.getElementById("pls-add");
      add.innerText = "Please add a link";
      add.style.color = "red";
      inpval.style.border = "1px solid red";
    }
  }
}
function eleCreate(inp, shortlink) {
  fulldiv = document.getElementById("full-container");
  fulldiv.innerHTML += `
  
       <div id="ans-container">
        <div id="userdata">${inp}</div>
        <div id="ans">${shortlink}</div> 
        <button id="copy" onClick="copyLink(this)">Copy</button>
        </div>
        `;
}
function copyLink(val) {
  val.innerText = "Copied!";
  val.style.backgroundColor = "#3A3054";
  let sibling = val.previousElementSibling.innerText;
  console.log(sibling);
  navigator.clipboard.writeText(sibling);
}
