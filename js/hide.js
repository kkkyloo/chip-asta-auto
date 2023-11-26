function toggleText() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("toggleBtn");
    var imgElement = document.querySelector('.img_none');

    var computedStyle = window.getComputedStyle(moreText);

    if (computedStyle.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Скрыть";
        imgElement.style.height = '60vh';
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Подробнее";
        imgElement.style.height = '36vh';
    }
}