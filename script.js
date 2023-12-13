const btnSpotify = document.querySelector('.btn-spotify');
const btnuser = document.querySelector('.btn-user');
btnSpotify.addEventListener('click', () => {
    window.open('https://spotify.com', '_blank')
})

btnuser.addEventListener('click', () => {
    window.open('https://discord.com','_blank')
})