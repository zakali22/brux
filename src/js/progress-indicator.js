const progressIndicator = document.querySelector('.progress-indicator')
const body = document.querySelector('body');

document.addEventListener('scroll', () => {
    const pageHeight = body.getBoundingClientRect().height; // height of the page (don't forget the height property)
    console.log(pageHeight)
    const browserHeight = window.innerHeight; // Height of the browser window
    const scrollableHeight = pageHeight - browserHeight; // The scrollable height of what we can scroll
    console.log(scrollableHeight)
    const pixelScrolled = window.pageYOffset; // How much we've scrolled from the top

    const percentScrolled = (pixelScrolled / scrollableHeight) * 100;

    progressIndicator.style.width = `${percentScrolled}%`
})