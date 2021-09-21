function registerResults(a, b, c, d) {

    if (fullname.value.length == 0 || email1.value.length == 0 || email2.value.length == 0 || option.value.length == 0) { 
       alert("Please fill out all the information fields");  

    return false; 
    }  	

    else {
        alert("You have fully entered all the information!");
        alert ('Name: ' + fullname.value + "\n" + "Email: " + email1.value + "\n" + "Email #2: "+ email2.value + "\n" + "Type: "+ option.value);              
        

  let fl = document.getElementById('fullname');
  localStorage.setItem( 'fullname', fl.value);
  let ml1 = document.getElementById( 'email1');
  localStorage.setItem( 'email1', ml1.value);
  let ml2 = document.getElementById('email2');
  localStorage.setItem( 'email2', ml2.value);
  let op = document.getElementById('option');
  localStorage.setItem( 'option', op.value);

    window.open( "../2nd-Bootstrap-demo-template/BOOTSTRAPdemo.html");
     }; 
}

//function store() {

    //  fullname.value = localStorage.getItem('fullname');
    //  fullname.oninput = () => {
    //  localStorage.setItem('fullname', fullname.value)
    //  };
    //  email1.value = localStorage.getItem('email1');
    //  email1.oninput = () => {
    //  localStorage.setItem('email1', email1.value)
    //  };
    //  email2.value = localStorage.getItem('email2');
    //  email2.oninput = () => {
    //   localStorage.setItem('email2', email2.value)
    //  };
    //  option.value = localStorage.getItem('option');
    //  option.oninput = () => {
    //  localStorage.setItem('option', option.value)
    //  };