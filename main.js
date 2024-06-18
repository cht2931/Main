// var train = document.querySelector('.train');
// var trainHeadDiv = document.querySelector('.head');  // Get the 'div' element with the 'head' class

// trainHeadDiv.addEventListener('click', function(e) {
//   e.preventDefault();

//   // Apply the "leave" class to start the animation
//   train.classList.add('leave');

//   // Create a function to navigate to the new page
//   function navigateToNewPage() {
//     window.location.href = "page1/page1.html";  // Use the hard-coded URL
    
//     // Remove the event listener
//     train.removeEventListener('animationend', navigateToNewPage);
//   }

//   // Wait for the animation to finish before navigating to the new page
//   train.addEventListener('animationend', navigateToNewPage);
// });



//TOPBAR
$(document).ready(function() {
    console.log("Document is ready and script is loaded.");  // This confirms that your script is running

    var lastScrollTop = 0;

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        console.log("Scrolled to position: " + scrollTop);  // This logs the current scroll position

        if (scrollTop > lastScrollTop && scrollTop > 90) { 
            console.log("Scrolling down, hiding the icon.");  // This confirms the downward scroll behavior
            $("#myIcon").addClass("hide-icon");
        } else if (scrollTop < lastScrollTop || scrollTop <= 90) { 
            console.log("Scrolling up, showing the icon.");  // This confirms the upward scroll or top of page behavior
            $("#myIcon").removeClass("hide-icon");
        }

        lastScrollTop = scrollTop;
    });
});






// moving user's screen after clicking the arrow
document.querySelector(".hollow-arrow-down").addEventListener("click", function() {
  document.querySelector("#selected-works-section").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hollow-arrow-up").addEventListener("click", function() {
  document.querySelector("#about-section").scrollIntoView({ behavior: "smooth" });
});



// Get the arrows and text elements
const arrowUp = document.querySelector('.hollow-arrow-up');
const arrowDown = document.querySelector('.hollow-arrow-down');
const textUp = document.querySelector('.Bouncing-text-up');
const textDown = document.querySelector('.Bouncing-text-down');

// Function to manage arrow and text visibility
function manageElements() {
  // Get the height of the document
  const documentHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  // Calculate the percentage of how far we have scrolled
  const scrollPosition = window.scrollY + window.innerHeight;
  const scrollPercent = (scrollPosition / documentHeight) * 100;

  // If we've scrolled less than 70% from the top of the page, show the down arrow and text
  if (scrollPercent < 70) {
    arrowDown.style.opacity = '1';
    arrowUp.style.opacity = '0';
    textDown.style.opacity = '1';
    textUp.style.opacity = '0';
  } else { // Otherwise, show the up arrow and text
    arrowDown.style.opacity = '0';
    arrowUp.style.opacity = '1';
    textDown.style.opacity = '0';
    textUp.style.opacity = '1';
  }
}

// Call the function once when the page loads
manageElements();

// Call the function every time a scroll event is detected
window.addEventListener('scroll', manageElements);



// //tooltips
// // get the tooltips
// const tooltips = document.querySelectorAll('.tooltip');

// // for each tooltip
// tooltips.forEach((tooltip) => {
//   // when the mouse enters the parent .car, show the tooltip
//   tooltip.parentElement.addEventListener('mouseenter', () => {
//     tooltip.style.visibility = 'visible';
//     tooltip.style.opacity = '1';
//   });

//   // when the mouse leaves the parent .car, hide the tooltip
//   tooltip.parentElement.addEventListener('mouseleave', () => {
//     tooltip.style.visibility = 'hidden';
//     tooltip.style.opacity = '0';
//   });
// });
// Get the .car elements in .train3 and the tooltips in .train1
const train3Cars = document.querySelectorAll('.train3 .car');
const tooltips = document.querySelectorAll('.train1 .tooltip');
const subTooltips = document.querySelectorAll('.train1 .subtooltip-container'); // Get the subtooltip-container elements

// For each .car in .train3
train3Cars.forEach((car, index) => {
  // When the mouse enters the .car, make the corresponding tooltip and subtooltips visible
  car.addEventListener('mouseenter', () => {
    tooltips[index].classList.add('show');  // Add 'show' class to tooltip
    if (subTooltips[index]) {  // Check if there is a subtooltip for this car
      subTooltips[index].classList.add('show');  // Add 'show' class to subtooltip
    }
  });

  // When the mouse leaves the .car, hide the corresponding tooltip and subtooltips
  car.addEventListener('mouseleave', () => {
    tooltips[index].classList.remove('show');  // Remove 'show' class from tooltip
    if (subTooltips[index]) {  // Check if there is a subtooltip for this car
      subTooltips[index].classList.remove('show');  // Remove 'show' class from subtooltip
    }
  });
});
////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');

//     // Function to show the tooltip for the sixth project
//     function showSixthTooltip() {
//         console.log('Mouse entered the red circle');
//         const tooltips = document.querySelectorAll('.train1 .tooltip');
//         const subTooltips = document.querySelectorAll('.train1 .subtooltip-container'); // Get the subtooltip-container elements
//         var tooltip = tooltips[5];
//         var subTooltip = subTooltips[5];
//         console.log('Show Tooltip:', tooltip);
//         console.log('Show SubTooltip:', subTooltip);
//         if (tooltip) {
//             tooltip.classList.add('show');
//         }
//         if (subTooltip) {
//             subTooltip.classList.add('show');
//         }
//     }

//     // Function to hide the tooltip for the sixth project
//     function hideSixthTooltip() {
//         console.log('Mouse left the red circle');
//         const tooltips = document.querySelectorAll('.train1 .tooltip');
//         const subTooltips = document.querySelectorAll('.train1 .subtooltip-container'); // Get the subtooltip-container elements
//         var tooltip = tooltips[5];
//         var subTooltip = subTooltips[5];
//         console.log('Hide Tooltip:', tooltip);
//         console.log('Hide SubTooltip:', subTooltip);
//         if (tooltip) {
//             tooltip.classList.remove('show');
//         }
//         if (subTooltip) {
//             subTooltip.classList.remove('show');
//         }
//     }

//     // Event listeners for the red circle
//     var circle = document.querySelector('.fixed-circle .circle');
//     if (circle) {
//         circle.addEventListener('mouseenter', showSixthTooltip);
//         circle.addEventListener('mouseleave', hideSixthTooltip);
//         console.log('Event listeners added to the circle');
//     } else {
//         console.log('Circle element not found');
//     }
// });







// //train2 momve top
// // select all '.car' elements within '.train2'
// // select all '.car' elements within '.train3'
// var carElementsTrain3 = document.querySelectorAll('.train3 .car');

// // for each '.car' element in '.train3'
// carElementsTrain3.forEach(function(carElement, index) {

//   // listen for 'mouseenter' events
//   carElement.addEventListener('mouseenter', function() {
//     // select the corresponding '.car' in '.train2'
//     var correspondingCarTrain2 = document.querySelector('.train2 .car:nth-child(' + (index + 1) + ')');

//     // move the corresponding '.car' up
//   correspondingCarTrain2.style.transform = 'translateY(-100%)';

//   });

//   // listen for 'mouseleave' events
//   carElement.addEventListener('mouseleave', function() {
//     // select the corresponding '.car' in '.train2'
//     var correspondingCarTrain2 = document.querySelector('.train2 .car:nth-child(' + (index + 1) + ')');

//     // move the corresponding '.car' back to its original position
//     correspondingCarTrain2.style.transform = 'translateY(0)';
//   });
// });
// Select all '.car' elements within '.train3'
var carElementsTrain3 = document.querySelectorAll('.train3 .car');

// For each '.car' element in '.train3'
carElementsTrain3.forEach(function(carElement, index) {

  // Listen for 'mouseenter' events
  carElement.addEventListener('mouseenter', function() {
    // Select the corresponding '.car' in '.train2'
    var correspondingCarTrain2 = document.querySelector('.train2 .car:nth-child(' + (index + 1) + ')');

    // Shrink the corresponding '.car' vertically from bottom to top
    correspondingCarTrain2.style.transform = 'scaleY(0)';
    correspondingCarTrain2.style.transformOrigin = 'top';

  });

  // Listen for 'mouseleave' events
  carElement.addEventListener('mouseleave', function() {
    // Select the corresponding '.car' in '.train2'
    var correspondingCarTrain2 = document.querySelector('.train2 .car:nth-child(' + (index + 1) + ')');

    // Grow the corresponding '.car' back to its original size
    correspondingCarTrain2.style.transform = 'scaleY(1)';
  });
});





//pulsing
document.addEventListener('DOMContentLoaded', (event) => {
  var pulseElements = document.querySelectorAll('.train2 .car .pulse');

  pulseElements.forEach(function(pulse) {
    let parentCar = pulse.parentElement;
    
    parentCar.addEventListener('mouseenter', function() {
      pulse.style.opacity = '0';
    });

    parentCar.addEventListener('mouseleave', function() {
      setTimeout(function() {
        pulse.style.opacity = '1';
      }, 10000);
    });
  });
});





//rocket
document.addEventListener('DOMContentLoaded', (event) => {
  const rocketShip = document.querySelector('.fixed-rocket');

  rocketShip.addEventListener('mouseenter', () => {
    console.log('Rocket ship hovered');
    // Additional actions on hover, if any
  });

  rocketShip.addEventListener('mouseleave', () => {
    console.log('Rocket ship hover out');
    // Additional actions on hover out, if any
  });
});

