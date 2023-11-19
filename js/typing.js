
let content = document.querySelectorAll('.content *');

let messages = [
    "Gửi bạn",
    "",
    "yêu quý,",
    "Chúc mừng sinh nhật! Chúc bạn của tôi sinh nhật đầy ắp sự yêu thương, tiếng cười và hạnh phúc!",
    "Người gửi",
    "",
    "ByMe",
];

let messLength = messages.length;
let messIndex = 0;
let charIndex = 0;

function typing(messIndex) {
    let currentMess = messages[messIndex];
    if (charIndex < currentMess.length) {
        let currentChar = currentMess.substring(0, charIndex + 1);
        content[messIndex].textContent = currentChar;
        charIndex++;
    } else {
        if (messIndex < messLength - 1) {
            messIndex++;
        } else {
            let icon = document.querySelector(".content svg");
            icon.style.display = "inline-block";
            return;
        }
        charIndex = 0;
    }
    setTimeout(typing, 120, messIndex);
}