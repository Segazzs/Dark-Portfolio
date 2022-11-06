var header_main = document.getElementById('header-main')
var menu = document.getElementById('menu')

// BUTTONS

var menu_open = document.getElementById('menu-open')
var menu_close = document.getElementById('menu-close')

menu_open.addEventListener('click', function open() {
    header_main.classList.add('none')
    menu.classList.remove('none')
})

menu_close.addEventListener('click', function close() {
    menu.classList.add('none')
    header_main.classList.remove('none')
})


var menu_items = document.getElementById('menu-item')

menu_items.addEventListener('click', function() {
    
})