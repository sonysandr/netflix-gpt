

export const checkValidData = (name,email, password) =>{
//search google for needed  regex code for test
     const isNameValid = /^[A-Za-zÀ-ÿ' -]+$/.test(name)
     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

     if(!isNameValid) return "Name is not valid"
     if(!isEmailValid) return "Email ID not valid";
     if(!isPasswordValid) return "Password is not valid";

     return null; //if both are valid return null meaning we have no errors
}