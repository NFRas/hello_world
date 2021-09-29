//in this page i shoudl use the param query stuff
//this page opens after clicking every user

const params = new URLSearchParams(window.location.search);

user = params.get('user');

// console.log(params);
  
  async function userinfo() {
   let url = `https://api.github.com/users/${user}`;
   try {
       let result = await fetch(url);
       console.log(result.json());

   } catch (err) {
   console.log(err);
   }

   let profile = {result};
   document.write(profile);

   }

  

  
  userinfo();
