let grid = document.querySelector('.parent');

for (let i = 1; i < 65; i++) {
    grid.innerHTML += `<div class='div${i}'>${i}</div>`
}