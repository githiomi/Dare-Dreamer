// Navbar toggle
const hamburger = document.querySelector('.hamburger i');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('bx-x');
    navigation.classList.toggle('show');

});

// Parallax Effect and Navbar Trigger
const moon = document.querySelector('.moon');
const leftCloud = document.querySelector('.cloud1');
const rightCloud = document.querySelector('.cloud2');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        let value = window.scrollY;

        leftCloud.style.left = value * -1 + 'px';
        rightCloud.style.right = value * -1 + 'px';

        logo.style.width = '5rem';
        moon.classList.add('toLeft');
    }else{
        logo.style.width = '6rem';
        moon.classList.remove('toLeft');
    }

    // Add a sticky navigation bar
    const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // To remove navbar icon on select and scroll
    hamburger.classList.remove('bx-x');
    navigation.classList.remove('show');

    // Change navbar active link
    sections.forEach(section => {
        let top = window.scrollY;

        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (top >= offset && top < (offset + height)) {

            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navigation li a[href*=' + sectionId + ']').classList.add('active');
            });

        };
    });

})

// Display the dream response
const interpreteBtn = document.getElementById('interpret');
const dreamResponse = document.getElementById('dreamResponse');
var input = document.getElementById('dreamTextArea').value;

interpreteBtn.addEventListener('click', (e) => {

    e.preventDefault();
    alert(`Your dream: ${input}`);

    // Show the dream response
    dreamResponse.classList.add('show');

});
