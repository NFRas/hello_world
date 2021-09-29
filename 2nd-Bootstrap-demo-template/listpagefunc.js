
async function getUsers() {
  let url = "https://api.github.com/users";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers()
  let html = '';
  users.forEach( user => {
    let htmlSegment = `<a href="userinfo.html?user=${user.login}">${user.login}</a> <br>`;
    window.localStorage.setItem("user": htmlSegment);

    return html += htmlSegment;
  });

document.write(html);
}

renderUsers();

function openusers(){
  window.open(" ", "_self")
}



//for the second page that opens contact informations maybe?
// let container = document.querySelector('.container');
  // container.innerHTML = html;

    
  
 