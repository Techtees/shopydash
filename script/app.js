const alertBtn = document.getElementById("alert-bell");
const dropdown = document.getElementById("alert-dropdown");
const profileBtn = document.getElementById("profile-account");
const acctDropdown = document.getElementById("acct-dropdown");


const setupGuideBottomList = document.getElementById("setup-guide-bottom")
const setupControl = document.querySelector(".setup-guide-control")
const setupArrow = document.querySelector(".setup-guide-arrow")

const personalizedGuide = document.querySelectorAll(".personalized-guide");
const targetGuide = document.querySelectorAll(".personalized-guide-top-wrap");
const guideContent = document.querySelectorAll(".personalized-guide-content")

const dismissPaymentPlan = document.getElementById("payment-plan");
const dismissBtn = document.querySelector(".dismiss-btn");

const inputCheckAll = document.querySelectorAll(".input-check")


const showProgress = document.getElementById("progress-show");
const progressValue = document.getElementById("progress-value");


// Alert Dropdown logn
alertBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    const alertDropdown = window.getComputedStyle(dropdown)

    if(alertDropdown.display === "none"){
        dropdown.style.display ="flex"
    } else{
        dropdown.style.display ="none"
    }
    
})

// Profile Dropdown Logic
profileBtn.addEventListener('click', (e) =>  {
  e.stopPropagation()
    const acctDropdownDisplay = window.getComputedStyle(acctDropdown).display;

    if(acctDropdownDisplay === "none"){
        acctDropdown.style.display = "flex"
    } else{
        acctDropdown.style.display = "none"
    }
})


// Dismiss logic
dismissBtn.addEventListener('click', (e) => {
  dismissPaymentPlan.style.display = "none"
})

//  Logic to expand and collapse personalized guide steps
setupArrow.addEventListener('click', () => {
     // Toggle to expanded
   if(setupGuideBottomList.classList.contains("guide-box-close")){
        setupGuideBottomList.classList.remove("guide-box-close");
        setupGuideBottomList.classList.add("guide-box-open");
        setupArrow.style.rotate = "0deg";
   } else{
         // Toggle to collapsed
        setupGuideBottomList.classList.remove("guide-box-open");
        setupGuideBottomList.classList.add("guide-box-close");
        setupArrow.style.rotate = "180deg";
   }

})

// Hide dropdown whenever users clicks anywhere on the page
document.addEventListener("click", (e) => {
  // dropdown for profile settings
  acctDropdown.style.display = window.getComputedStyle(acctDropdown).display !== "none" ? "none" : "";

  // dropdown for alert
  dropdown.style.display = window.getComputedStyle(dropdown).display !== "none" ? "none" : "";
});

// progress bar calculation
const progressCalculation = () => {
  let checkValue = 0;

  inputCheckAll.forEach((element) => {
    if (element.checked) checkValue = checkValue + 1;
  });

  const totalCheck = inputCheckAll.length;
  const percentage = Math.round((checkValue / totalCheck) * 100);

  showProgress.innerText = `${checkValue}/${totalCheck} completed`;
  progressValue.setAttribute("value", `${percentage}`);
  progressValue.innerText = `${percentage}%`;
};

// expand and collapse accordion
function accordionToggle(index) {
  
    personalizedGuide.forEach((element, i) => {
      const isExpanded = i === index;
      
      element.classList.toggle("personalized-guide-bg", isExpanded);
      element.children[1].classList.toggle("open-guide-content", isExpanded);
    });
}
  
// Event listeners
personalizedGuide.forEach((element, index) => {
  const targetPEl = element.children[0];
  const inputCheck = element.children[0].children[0].children[0].children[0];

  // Click event listener
  targetPEl.addEventListener("click", () => {
    accordionToggle(index);
  });

  // display the first personal guide
  if (index === 0) {
    accordionToggle(0);
  }
  // Checkbox change event listener
  inputCheck.addEventListener("change", () => {
    if (inputCheck.checked) {
      accordionToggle(index);
    }
    progressCalculation();
  });
});
  



