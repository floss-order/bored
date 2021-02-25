import showActivity from './assets/scripts/activity.js'

(async function() {
    await showActivity()
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
          showActivity()
        }
    })
    document.addEventListener('click', showActivity)
})()
