//in this page i shoudl use the param query stuff
//this page opens after clicking every user

let user = getElement
  
  async function userinfo(x) {
   let url = `https://api.github.com/users/?login=${user}`;
   try {
       let profile = await fetch(url);
       return await profile.json();
   } catch (err) {
   console.log(err);
   }
  }
  
  userinfo();
