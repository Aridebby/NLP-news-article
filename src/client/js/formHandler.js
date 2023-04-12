function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    
    let formText = getUserInput(document.getElementById('blog-text').value)
    if (formText != ""){
        Client.checkNLP(formText)
    }else{
        alert('Please fill in all empty fields')
    }
   

   
}

function getUserInput(text){
    console.log(text)
    return text
}

export { 
    handleSubmit,
    getUserInput
}
