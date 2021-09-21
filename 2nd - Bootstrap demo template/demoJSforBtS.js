 
function registername() {
    let a = localStorage.getItem('fullname')
    if (a == 0 || a == null || a == undefined) {
        window.open( "file:///Users/nrasoulipour/Documents/Codes%20for%20programming/Assignments/1st%20-%20CSS%20Demo%20template/demo.html", '_blank');
        return true
    }
    else {
        document.write( a );
    }
};

registername()

function clearall () {
    let  = localStorage.clear();
    window.open( "file:///Users/nrasoulipour/Documents/Codes%20for%20programming/Assignments/1st%20-%20CSS%20Demo%20template/demo.html", '_blank')
}

//this can be used for the purpose of writing the username on top as well just with the condition of 
//the <strong> tag having an "id = username" so we can call it down here to change the tag's content.
//document.getElementById('username').innerText = a;
