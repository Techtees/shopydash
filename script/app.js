var alertBtn = document.getElementById("alert-bell")
var dropdown = document.getElementById("alert-dropdown")

alertBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    const alertDropdown = window.getComputedStyle(dropdown)

    if(alertDropdown.display === "none"){
        dropdown.style.display ="flex"
    } else{
        dropdown.style.display ="none"
    }
    
})

