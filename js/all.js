/*swiper 輪播外掛 */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768:{
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
});

/*---------------------------------------------- */
//動畫
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});