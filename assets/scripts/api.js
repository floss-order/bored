export async function getActivityObject() {
    const url = 'https://www.boredapi.com/api/activity'
    const request = await fetch(url)
    const response = await request.json()
    return response
}

export async function getActivityText() {
    const activityObject = await getActivityObject()
    const {activity} = activityObject
    return activity
}

export async function getActivityType() {
    const activityObject = await getActivityObject()
    const {type} = activityObject
    return type
}