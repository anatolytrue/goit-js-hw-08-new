// import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form')
const LOCALSTORAGE_KEY = "feedback-form-state"

let formData = localStorage.getItem(LOCALSTORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) : {}
form.addEventListener('input', onFormInput)
form.addEventListener('submit', onFormSubmit)

console.log(formData)
console.log(form.elements)


updateInput()

function updateInput() {
    const formInput = localStorage.getItem(LOCALSTORAGE_KEY)
    const parsedFormInput = JSON.parse(formInput)
    if (parsedFormInput) {
        form.elements.email.value = parsedFormInput.email || ''
        form.elements.message.value = parsedFormInput.message || ''
    } 
}



function onFormInput(e) {
    e.preventDefault()
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(e) {
    e.preventDefault();
    const { elements: { email, message } } = e.currentTarget;
    const formObject = { email: email.value, message: message.value }
    if (email.value === '' || message.value === '') {
        return alert('Fill in all the fields!')
    }
    console.log(formObject)
    localStorage.removeItem(LOCALSTORAGE_KEY)
    form.reset()
    // const formData = new FormData(e.currentTarget)
    // formData.forEach((value, name) => {
    //     if (name === '' || value === '') {
    //         alert('Zapovny polya!')
    //     } else {
    //         localStorage.setItem(JSON.stringify({name, value}))
    //         console.log({name, value})
    //     }
    //     form.reset()
    // })
}
