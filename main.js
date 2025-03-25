username=prompt("Username:")
password=prompt("Password:")

console.log(isValidPassword(username, password))

function isValidPassword(username, password) {
    console.log(`you typed: username ${username} and password is ${password}`)
    
    if (password.indexOf(username) != -1) {
        return false;
    } else if (password.indexOf(" ") != -1) {
        return false;
    } else if (length=password.length < 8) {
        return false;
    } else {
        return true;
    }
}
