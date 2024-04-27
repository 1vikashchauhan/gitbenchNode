
const calculateForm = document.querySelector('form')
const formData = new FormData(calculateForm);
const firstValue = document.querySelector('#firstValue')
const secondValue =document.querySelector('#secondValue')
const operation = document.querySelector('#operation');
const messageOne = document.querySelector('#message-1')


let operationName = ''
 operation.addEventListener("change", function() {
    operationName = operation.value;
   
     return operationName;


});
calculateForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    fetch(`http://localhost:3000/calculate?firstValue=${+ firstValue.value}&secondValue=${+ secondValue.value}&operation=${operationName}`, {method: "POST"}).then((response) => {
        response.json().then((data) => {
            console.log('data',data);
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = `The ${operationName} of first number : ${firstValue.value} and second number : ${secondValue.value} is ${data.data}`
                
            }
        })
    })
})
