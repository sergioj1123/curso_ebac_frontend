document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector(".profile-avatar");
  const profileName = document.querySelector(".profile-name");
  const profileUserName = document.querySelector(".profile-username");
  const repositories = document.querySelector(".repositories");
  const seguidores = document.querySelector(".seguidores");
  const seguindo = document.querySelector(".seguindo");
  const profileLink = document.querySelector(".profile-link");

  fetch("https:api.github.com/users/sergioj1123")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      profileImg.src = json.avatar_url;
      profileName.innerText = json.name;
      profileUserName.innerText = json.login;
      repositories.innerText = json.public_repos;
      seguidores.innerText = json.followers;
      seguindo.innerText = json.following;
      profileLink.href = json.html_url;
    })
    .catch((error) => {
      alert(error.message);
    });
});
