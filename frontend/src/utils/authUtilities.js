export const getUserInfo = (data) => {
    let userInfo

    const userInfoFromStorage = JSON.parse(localStorage.getItem("userInfo"))
    if (data) {
        userInfo = userInfoFromStorage ? userInfoFromStorage : data.studentsLogin
    } else {
        userInfo = userInfoFromStorage
    }

    return userInfo

}