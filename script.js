document.addEventListener("DOMContentLoaded", function () {
  const readingsContent = document.getElementById("readings-content");

  // Add click event listeners to pills and blobs
  const pills = document.querySelectorAll(".readingpill");
  const blobs = document.querySelectorAll(".readingblob");

  pills.forEach((pill) => {
    pill.addEventListener("click", function () {
      const content = this.getAttribute("data-content");
      updateReadingsContent(content);
    });
  });

  blobs.forEach((blob) => {
    blob.addEventListener("click", function () {
      const content = this.getAttribute("data-content");
      updateReadingsContent(content);
    });
  });

  // Function to update readings view content
  function updateReadingsContent(content) {
    readingsContent.innerHTML = "";
    readingsContent.innerHTML = content;
  }
});

//adding images to months//
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul"];

function generateImagePaths(month, count) {
  const paths = [];
  for (let i = 1; i <= count; i++) {
    paths.push(`images/${month}/image_${i}.jpg`);
  }
  return paths;
}

const imageCounts = {
  jan: 17,
  feb: 54,
  mar: 110,
  apr: 50,
  may: 21,
  jun: 21,
  jul: 12,
};

let currentIndex = 0;
let currentImages = [];

function updateGrid(month) {
  const grid = document.getElementById("image-grid");
  grid.innerHTML = "";
  currentImages = generateImagePaths(month, imageCounts[month]);
  currentImages.forEach((src, index) => {
    const cell = document.createElement("div");
    cell.className = "image-cell";
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => openModal(index);
    cell.appendChild(img);
    grid.appendChild(cell);
  });
}

function openModal(index) {
  currentIndex = index;
  updateModalContent();
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex >= currentImages.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = currentImages.length - 1;
  updateModalContent();
}

function updateModalContent() {
  const image = currentImages[currentIndex];
  const imageName = image.substring(image.lastIndexOf("/") + 1); // Get filename
  document.getElementById("modal-image").src = image;
  document.getElementById("caption").textContent = imageName; // Set caption to filename
}

document.addEventListener("DOMContentLoaded", () => {
  updateGrid("jan"); // Automatically select January on page load

  const modal = document.getElementById("modal");
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
});

// window.addEventListener('scroll', function() {
//     var spans = document.querySelectorAll('#title span');
//     var scrollTop = window.scrollY;

//     if (scrollTop > 0) {
//         spans.forEach(function(span, index) {
//             var rotation = scrollTop * 0.5; // Adjust the multiplier as needed
//             span.classList.add('rotate'); // Add rotation class
//             span.style.transform = 'rotate(' + rotation + 'deg)';
//         });
//     } else {
//         spans.forEach(function(span) {
//             span.classList.remove('rotate'); // Remove rotation class
//             span.style.transform = 'rotate(0deg)'; // Reset rotation
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY;
    var scrollContent = document.querySelector(".scroll-content");

    // Check if the device is in mobile view
    var isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed

    // Scroll speed factor
    var scrollSpeed = isMobileView ? 0.5 : 1; // Adjust the scroll speed for mobile view

    scrollContent.style.transform =
      "translateX(-" + scrollY * scrollSpeed + "px)";
  });
});

//clicked box style//
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      boxes.forEach((b) => b.classList.remove("clicked")); // Remove 'clicked' class from all boxes
      this.classList.add("clicked"); // Add 'clicked' class to the clicked box
    });
  });
});

function handleBoxClick(element, month) {
  updateGrid(month);
}

document.addEventListener("DOMContentLoaded", function () {
  const blobs = document.querySelectorAll(".readingpill");

  blobs.forEach(function (blob) {
    blob.addEventListener("click", function () {
      // Remove the 'clicked' class from all blobs
      blobs.forEach(function (b) {
        b.classList.remove("clicked");
      });

      // Add the 'clicked' class to the clicked blob
      this.classList.add("clicked");
    });
  });
});
// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to handle the button click
function handleButtonClick() {
  const randomColor = getRandomColor();
  document.getElementById("readings-view").style.backgroundColor = randomColor;
}

// Add event listeners to all buttons with the class 'color-button'
const buttons = document.querySelectorAll(".color-button");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
