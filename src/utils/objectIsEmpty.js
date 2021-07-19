export const isEmpty = (obj) => {
    for (let key in obj) {
        return true
    }
    return false
}