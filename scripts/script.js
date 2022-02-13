const links = {
  youtube: 'https://www.youtube.com',
  instagram: 'https://www.instagram.com',
  facebook: 'https://www.facebook.com',
  twitter: 'https://twitter.com',
  github: 'tontitor'
}

function changeSocial() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = links[social]
  }
}

changeSocial()

function consumingApiGitHub() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

consumingApiGitHub()
