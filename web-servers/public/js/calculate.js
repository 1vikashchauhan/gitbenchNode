
const calculateForm = document.querySelector('form')
const formData = new FormData(calculateForm);
const firstValue = document.querySelector('#firstValue')
const secondValue =document.querySelector('#secondValue')
const operation = document.querySelector('#operation');
const messageOne = document.querySelector('#message-1')
calculateForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('peter',firstValue.value,secondValue,operation.value);
   

    messageOne.textContent = 'Loading...'
       console.log('object')
    fetch(`http://localhost:3000/calculate?firstValue=${+ firstValue.value}&secondValue=${+ secondValue.value}&operation=${operation.value}`).then((response) => {
        response.json().then((data) => {
            console.log('data',data);
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.data
                
            }
        })
    })
})

console.log('cliendt sfkkdf');