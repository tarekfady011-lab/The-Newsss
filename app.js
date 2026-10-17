getWeatherData()
getCurrencyData()

getNewsData('sports')
getNewsData('entertainment')
getNewsData('health')
getNewsData('business')

getSportsData()
var navLinks = document.querySelectorAll('.nav-link[data-category]')

for (var i = 0; i < navLinks.length; i++) {//hatlf 3la al links wa awl lma ados b3lm al order bta3 al code
    navLinks[i].addEventListener('click', function (event) {//btgyb kol al links al na 7attha fy al category w rabthom kolhom m3 b3d bal queryselector
        event.preventDefault()

        var category = this.getAttribute('data-category')
        var sections = document.querySelectorAll('.news-section')

        for (var s = 0; s < sections.length; s++) {
            if (category === 'all' || sections[s].id === category + '-section') {
                sections[s].classList.remove('d-none')
            } else {
                sections[s].classList.add('d-none')
            }
        }

        for (var n = 0; n < navLinks.length; n++) {
            navLinks[n].classList.remove('active')
        }
        this.classList.add('active')
    })
}
