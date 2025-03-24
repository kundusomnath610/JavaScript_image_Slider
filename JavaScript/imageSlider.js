// Store Image An Array cause it accessible from anywhere, it dose not depend 
// on local machine for image.
const images = [
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", // JavaScript logo
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1920px-MySQL_logo.svg.png", // Fixed MySQL logo
    "https://sourcebae.com/blog/wp-content/uploads/2023/08/ReactJS-Framework-Benefits.png", // React logo
    "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    "https://www.jrebel.com/sites/default/files/styles/social_preview_image/public/image/2020-05/image-blog-revel-top-java-tools.jpg?itok=34P5v4AD",
    "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
];

let index = 0;

// Function for Update Image
function updateImage() {
    document.getElementById("slider").src = images[index];
}

// Function for Next Image
function nextImage() {
    index = (index + 1) % images.length;
    updateImage();
}

// Function for previous Image
function prevImage() {
    index = (index - 1 + images.length) % images.length;
    updateImage();
}

// Initialize first image
updateImage();