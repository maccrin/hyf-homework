const BASE_URL = `https://crudcrud.com/api/${API_KEY}`
let auth = false
let duplicate = 0
const createNewScreenshotForm = document.getElementById('create-new-screenshot')
const addUrlInput = document.getElementById('add-screenshot')
const screenShotContainer = document.getElementById('screenshot-container')
const showScreenShot = document.getElementById('show-screenshot')
const button = document.getElementById('save')
let screenShotPost
let usersPost
let users = []
const userbutton = document.getElementById('usersave')
const userLogin = document.getElementById('mail')
const userPwd = document.getElementById('pwd')
const userForm = document.getElementById('create-new-userlogin')
const userContainer = document.getElementById('user-container')
const checkcreDentials = document.getElementById('tocheckcredential')
const userEmail = document.getElementById('email')
const userPassWord = document.getElementById('password')
const userCreateButton = document.getElementById('usercreate')
const userInputEmail = document.getElementById('screen-shot-mail')
const userInputUrl = document.getElementById('add-user-screenshot')
const userScreenShot = document.getElementById('userinput')
let userScreenShots
const userScreenShotContainer = document.getElementById(
    'user-screenshot-container'
)

// this eventlistner is to send back  only the the requested url screenshot
const inputScreenShot = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_SCREEN_KEY,
            'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
        }
    }
    const input = `https://website-screenshot6.p.rapidapi.com/screenshot?url=https://${addUrlInput.value}&width=400&height=500`

    const req = await fetch(`${input}`, options)
    const respns = await req.json()
    showScreenShot.innerHTML = respns.screenshotUrl

    console.log(`${showScreenShot.innerHTML}`)
}
// addUrlInput.addEventListener('change', inputScreenShot);
//The Below section is to create/get/delete screenshot as per the requirement
//Function (handler) to delete a specific Screenshot by it's id
const handleDeleteScreenShot = async postId => {
    await fetch(`${BASE_URL}/blog/${postId}`, {
        method: 'DELETE'
    })
    const div = document.getElementById(postId)
    div.innerHTML = ''
}

//Screenshot Div Element for each ScreenShot
const createScreenshottDiv = eachPost => {
    const div = document.createElement('div')
    div.id = eachPost._id
    const h3 = document.createElement('h3')
    const img = document.createElement('img')
    img.src = eachPost.screenshot
    const button = document.createElement('button')
    h3.innerHTML = eachPost.url
    button.innerHTML = 'Delete'
    button.addEventListener('click', () => {
        handleDeleteScreenShot(eachPost._id)
    })
    div.appendChild(h3)
    div.appendChild(img)
    div.appendChild(button)
    return div
}

// event handler to create screen shot once the form submit
const CreateScreenShot = async e => {
    if (addUrlInput.value) {
        e.preventDefault()
        await inputScreenShot()
        const body = {
            url: addUrlInput.value,
            screenshot: showScreenShot.innerHTML
        }
        const response = await fetch(`${BASE_URL}/blog`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        screenShotContainer.appendChild(createScreenshottDiv(data))
        addUrlInput.value = ''
    } else {
        alert(`Provide input`)
    }
}
//To get list of Screenshot created
const getBlogScreenShots = async () => {
    const response = await fetch(`${BASE_URL}/blog`)
    const data = await response.json()
    console.log(data)
    screenShotPost = data
    screenShotPost.forEach(eachShot => {
        if (eachShot.url)
            screenShotContainer.appendChild(createScreenshottDiv(eachShot))
    })
}
getBlogScreenShots()
createNewScreenshotForm.addEventListener('submit', CreateScreenShot)

//EXTRA and EXTRA EXTRA PART
//Create Some Users and Give them credentials to login

//delete user function
const handleDeleteUser = async userID => {
    try {
        await fetch(`${BASE_URL}/blog/${userID}`, {
            method: 'DELETE'
        })
        usersPost = usersPost.filter(eachPost => {
            if (eachPost._id !== userID) {
                return usersPost
            }
        })
        const div = document.getElementById(userID)
        div.innerHTML = ''
    } catch (e) {
        alert(`Issue with deletion ${e.message}`)
    }
}

const createUserDiv = eachUser => {
    console.log(eachUser)
    const div = document.createElement('div')
    div.id = eachUser._id
    const userName = document.createElement('p')
    const passWord = document.createElement('p')
    userName.innerHTML = eachUser.mail
    passWord.innerHTML = eachUser.password
    div.appendChild(userName)
    div.appendChild(passWord)
    const button = document.createElement('button')
    button.innerHTML = `Delete User`
    div.appendChild(button)
    button.addEventListener('click', () => {
        handleDeleteUser(eachUser._id)
    })
    return div
}
//create user function
const createUser = async e => {
    e.preventDefault()
    duplicate = 0
    if (!userEmail.value || !userPassWord.value) {
        alert(`Input fields empty`)
        return
    }
    const body = {
        mail: userEmail.value,
        password: userPassWord.value
    }
    if (users.length > 0) {
        users.forEach(eachUser => {
            if (eachUser.mail === userEmail.value) {
                alert(`email already exsits`)
                duplicate = 1
            }
        })
    }
    if (duplicate == 1) return
    users.push(body)
    const response = await fetch(`${BASE_URL}/blog`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()
    userContainer.appendChild(createUserDiv(data))
    userEmail.value = ''
    userPassWord.value = ''
}
//get user fucntion
const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/blog`)
    const data = await response.json()
    usersPost = data
    usersPost.forEach(user => {
        if (user.mail && user.password)
            userContainer.appendChild(createUserDiv(user))
    })
}

getUsers()
userCreateButton.addEventListener('click', createUser)
// displaying screenshots  in DOM which are created by suucessful loggedin  users
const createUserScreenShot = userData => {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const h5 = document.createElement('h5')
    const img = document.createElement('img')
    img.src = userData.screenshot
    h3.innerHTML = userData.userEmail
    h5.innerHTML = userData.urlInput
    div.appendChild(h3)
    div.appendChild(h5)
    div.appendChild(img)
    return div
}

//this fucntion is invoked only if user login is succesful and it's called from another function below
const fetchUserScreenShot = async email => {
    if (userInputUrl.value) {
        const userEmail = email
        const userUrl = userInputUrl.value
        let url
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_SCREEN_KEY,
                'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
            }
        }
        const input = `https://website-screenshot6.p.rapidapi.com/screenshot?url=https://${userInputUrl.value}&width=400&height=500`

        const req = await fetch(`${input}`, options)
        const respns = await req.json()
        showScreenShot.innerHTML = respns.screenshotUrl
        const body = {
            userEmail: userEmail,
            urlInput: userUrl,
            screenshot: showScreenShot.innerHTML
        }
        const response = await fetch(`${BASE_URL}/blog`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        userScreenShots.push(data)
        userScreenShotContainer.appendChild(createUserScreenShot(data))
    }
    userInputUrl.value = ''
}

//Credentials checking if loggin is succeful or not
const checkUserCredentials = async event => {
    event.preventDefault()
    if (userLogin.value && userPwd.value) {
        const response = await fetch(`${BASE_URL}/blog`)
        const data = await response.json()
        blog = data
        console.log(blog)
        blog.forEach(eachBlog => {
            if (eachBlog.mail && eachBlog.password) {
                if (
                    eachBlog.mail === userLogin.value &&
                    eachBlog.password === userPwd.value
                ) {
                    auth = true
                    alert(`Credentials mathced and so can fetch screenshot`)
                    userInputUrl.addEventListener('change', () => {
                        fetchUserScreenShot(eachBlog.mail)
                    })
                }
            }
        })
        if (auth === false) alert(`Invalid Credentials`)
    } else {
        console.log(`Empty Input`)
    }
}
//if login succesful then screenshot fecthing fucntion
userInputUrl.addEventListener('change', () => {
    if (auth === false) {
        alert(`Login to Fetch Screen Shot`)
        userInputUrl.value = ''
    }
})
// Showing only those screen shots which have been uploaded by succesful loggedin users
const getUsersScreenShot = async () => {
    const response = await fetch(`${BASE_URL}/blog`)
    const data = await response.json()
    userScreenShots = data
    console.log(userScreenShots)
    userScreenShots = userScreenShots.filter(eachScreenShot => {
        if (
            eachScreenShot.hasOwnProperty('userEmail') &&
            eachScreenShot.hasOwnProperty('screenshot')
        ) {
            return eachScreenShot
        }
    })
    userScreenShots.forEach(user =>
        userScreenShotContainer.appendChild(createUserScreenShot(user))
    )
}
getUsersScreenShot()
userForm.addEventListener('submit', checkUserCredentials)
