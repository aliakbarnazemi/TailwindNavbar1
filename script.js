// Start Theme 
let $body = document.body;
let $btn = document.querySelector('#btn');
let darkicon = document.querySelector('#darkicon')
let lighticon = document.querySelector('#lighticon')

$body.classList.add('dark:bg-black', 'text-white')
darkicon.classList.add('hidden')

$btn.addEventListener('click', () => {
    $body.classList.toggle('dark:bg-black')
    $body.classList.toggle('text-white')
    darkicon.classList.toggle('flex')
    darkicon.classList.toggle('hidden')
    lighticon.classList.toggle('hidden')
});
// End Theme 

// Start DD Categories
let btndd = document.querySelector('#btndd')
let dd = document.querySelector('#dd')
dd.classList.add('hidden')

btndd.addEventListener('click', () => {
    dd.classList.toggle('flex')
    dd.classList.toggle('hidden')
})
// End DD Categories

// Start DD Brands
let btnddbrand = document.querySelector('#btnbrand')
let ddbrand = document.querySelector('#ddbrand')
ddbrand.classList.add('hidden')

btnddbrand.addEventListener('click', () => {
    ddbrand.classList.toggle('flex')
    ddbrand.classList.toggle('hidden')
})
// End DD Brands

// Start Menu
let menubtn = document.querySelector('#menubtn')
let $menu = document.querySelector('#menu')

$menu.classList.add('hidden')
menubtn.addEventListener('click', () => {
    $menu.classList.toggle('block')
    $menu.classList.toggle('hidden')
})
// End Menu