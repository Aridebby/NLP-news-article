import { checkNLP } from './js/nlpChecker'
import { handleSubmit } from './js/formHandler'

// console.log(checkForName);

// alert("I EXIST")
// console.log("CHANGE!!");
checkForConnection('connected');

function checkForConnection (connect){
    console.log(connect);
}

import './styles/base.scss'
import './styles/resets.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export{
    handleSubmit,
    checkNLP
}