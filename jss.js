const form = document.forms["form"];

font.addEventListener("input", "inputHandler");

function inputHander({targe}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = ei.getAttribute ("data-reg");
    const reg = new RegExp(inputReg);
    console.log(inputValue, reg);
    if(reg.test(inputValue)) {
        ei.style.border = "2px solid rgb(0, 196, 0)";
    } else {
        ei.style.border = "2px solid rgb(255, 0, 0)";
    }
}