 
function registername() {
    let a = localStorage.getItem('fullname')
    if (a == 0 || a == null || a == undefined) {
        opentab()
    }
    else {
        document.write( a );
    }
};

// registername()

function clearall () {
    localStorage.clear();
    opentab()
}

function opentab () {
    window.open("../1st-CSS-Demo-template/demo.html", "_self");
}

//createing an opject with all the inputs
let user = {
    name: document.getElementById('fullname'),
    emails:[document.getElementById( 'email1'), document.getElementById('email2')],
    Type: document.getElementById('option'), 
}
console.log(user);

//this can be used for the purpose of writing the username on top as well just with the condition of 
//the <strong> tag having an "id = username" so we can call it down here to change the tag's content.
//document.getElementById('username').innerText = a;
