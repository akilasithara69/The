export default class Utility{

    static isValidField=(term) =>{  // this time only check the password length is greter than 0
        let length=term.trim().length // trim use to remove extra spaces
        return length>0?true:false
    }


    static isEmailValid=(term)=>{
        const expression=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let isValid=expression.test(String(term).toLowerCase())
        return
    }
}