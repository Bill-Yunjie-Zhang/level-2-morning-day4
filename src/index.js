// // // var name = "Bill"

// // // console.log(name.length)

// // const isPal = function(word){
// //     const lowercased = word.toLowerCase()
// //     const splitWord = lowercased.split('')
// //     const reversed = splitWord.reverse()
// //     const joined = reversed.join('')

// //     return lowercased === joined
// // }

// // console.log(isPal('mom'))

// var user = {
//     username: "Bill",
//     password: "password123"
// }

// const isCorrectLogin = function(username, password){
//     if(typeof username !== "string"){
//         return "Please enter a correct username"
//     }
//     const usernameR = user.username.toLowerCase()
//     const usernameL = username.toLowerCase()
//     if(usernameR !== usernameL || password !== user.password){
//         return "Your accout or password is not correct"
//     }
//     const isCorrect = usernameR === usernameL && password === user.password
//     return isCorrect
// }

// // const isCorrectLogin2 = (username, password) => username.toLowerCase() === user.username.toLowerCase() && password === user.password

// console.log(isCorrectLogin("bill", "password123"))

const lengthOfString = function(string){
    return string.length
}

console.log(lengthOfString("hello"))