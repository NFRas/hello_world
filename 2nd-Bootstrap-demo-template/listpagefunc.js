
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

  users.forEach( user => {
    let htmlSegment = `<h2> ${user.login}<h2>s`;
    
  document.write(htmlSegment);
  });
 
}

renderUsers();