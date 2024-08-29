const button = document.querySelectorAll('.toggler')
const content = document.querySelectorAll('.content');

content.forEach(content => {
    content.style.display = 'none';
});

button.forEach((button, index) => {
    button.addEventListener('click', function () {
        if (content[index].style.display == 'none') {
            content[index].style.display = 'flex';
            button.src = 'https://img.icons8.com/?size=100&id=11206&format=png&color=000000'
        } else {
            content[index].style.display = 'none';
            button.src = 'https://img.icons8.com/?size=100&id=11255&format=png&color=000000'
        }
    });
});