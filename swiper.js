// const imageContainer = document.getElementById("image-container");
// const swiperWrapper = document.querySelector(".swiper-wrapper");

// fetch(
//   "https://pixabay.com/api/?key=37476395-c6339256680673d0d6639285b&q=pizza&image_type=photo&per_page=10"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const images = data.hits;
//     const imagePromises = images.map((image) => {
//       return new Promise((resolve, reject) => {
//         const imageUrl = image.webformatURL;
//         const img = document.createElement("img");
//         img.src = imageUrl;
//         img.alt = "Pizza Image";
//         img.classList.add("food-image");

//         img.addEventListener("load", () => {
//           const slide = document.createElement("div");
//           slide.classList.add("swiper-slide");
//           slide.appendChild(img);
//           swiperWrapper.appendChild(slide);
//           resolve();
//         });

//         img.addEventListener("error", () => {
//           reject();
//         });

//         // Append the image element to the container to trigger image loading
//         imageContainer.appendChild(img);
//       });
//     });

//     Promise.all(imagePromises)
//       .then(() => {
//         // Initialize Swiper after all images have been loaded
//         var swiper = new Swiper(".mySwiper", {
//           spaceBetween: 30,
//           centeredSlides: true,
//           autoplay: {
//             delay: 2500,
//             disableOnInteraction: false,
//           },
//           pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//           },
//           navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           },
//           on: {
//             autoplayTimeLeft(s, time, progress) {
//               progressCircle.style.setProperty("--progress", 1 - progress);
//               progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//             },
//           },
//         });
//       })
//       .catch((error) => {
//         console.log("Error loading images:", error);
//       });
//   })
//   .catch((error) => {
//     console.log("Error fetching images:", error);
//   });
