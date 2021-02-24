import * as api from './api.js'

async function showActivity() {
    const activityText = document.getElementById('activity__text')
    const activityType = document.getElementById('activity__type')

    activityText.textContent = await api.getActivityText()
    activityType.textContent = await api.getActivityType()
}

export default showActivity