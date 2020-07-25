const progressIndicator = document.querySelector('.progress-indicator')
const header = document.querySelector('.header')
const body = document.querySelector('body');

// Progress indicator scrolling
document.addEventListener('scroll', () => {
    const pageHeight = body.getBoundingClientRect().height; // height of the page (don't forget the height property)
    console.log(pageHeight)
    const browserHeight = window.innerHeight; // Height of the browser window
    const scrollableHeight = pageHeight - browserHeight; // The scrollable height of what we can scroll
    const pixelScrolled = window.pageYOffset; // How much we've scrolled from the top

    const percentScrolled = (pixelScrolled / scrollableHeight) * 100;

    progressIndicator.style.width = `${percentScrolled}%`
})

// Header color + box-shadow scrolling
function headerBoxShadow(){
    const pixelScrolled = window.pageYOffset;
    const alpaPixelWeighted = Math.min((pixelScrolled/1000), 0.5)
    
    header.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpaPixelWeighted})`
}

function headerBackground(){
    const pixelScrolled = window.pageYOffset;

    if(pixelScrolled > 64){
        header.classList.add('scrolling')
    } else {
        header.classList.remove('scrolling')
    }
}

document.addEventListener('scroll', () => {
    headerBoxShadow()
    headerBackground('white');
})

