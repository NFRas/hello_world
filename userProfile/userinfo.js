//in this page i shoudl use the param query stuff
//this page opens after clicking every user

const params = new URLSearchParams(window.location.search);

user = params.get('user');

userInfo = {}

// console.log(params);
  
  async function userinfo() {
   let url = `https://api.github.com/users/${user}`;
   try {
       let result = await fetch(url);
       let userInfo =  await result.json();
       document.write(`<h3> Login: ${userInfo.login}</h3> <br> 
                        <strong> Site Admin:</strong> ${userInfo.id}<br> 
                        <strong> Node Id: </strong> ${userInfo.node_id}`) ;
    } catch (err) {
   console.log(err);
   }
   }

  userinfo();
