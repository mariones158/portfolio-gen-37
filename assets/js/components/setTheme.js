const buttonSwitch = document.querySelector('navbar__toggle--darkmode-input');
const userTheme = localStorage.getItem('theme');
const darkQuery = window.matchMediaQuery('(prefers-color-scheme: dark)')

function setThemeOnload(){
    if(userTheme === 'dark' || (!userTheme && darkQuery)){
        setTheme('dark')
        buttonSwitch.checked = true
    }else {
        setTheme('light')
        buttonSwitch.checked = false
    }
}


function setTheme(theme){
    localStorage.setItem('theme', newTheme)
}

darkQuery.addEventListener('change',(e) => {
    setTheme(e.matches ? 'dark' : 'light')
    buttonSwitch.checked = e.matches
})

export default setThemeOnload;  //
