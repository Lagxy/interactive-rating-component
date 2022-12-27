const submit = document.querySelector(".submit");
const content1 = document.querySelector('.content');
const content2 = document.querySelector('.content2');
const text = document.querySelector('.circle2');

submit.addEventListener('click', () => {
    const value = document.querySelector('input[type="radio"]:checked');
    if (value == null){
        value.value = 0;
    }
    content1.style.display = "none";
    content2.style.display = "flex";
    text.textContent = `You selected ${value.value} out of 5`;
});