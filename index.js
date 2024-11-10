const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle  mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
    // Close menu when close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');  // เลือกทุกๆ skill ที่มีในหน้า
  
    skills.forEach(skill => {
      const progressBar = skill.querySelector('.progress');
      const skillLevel = skill.getAttribute('data-skill');  // อ่านค่า data-skill
  
      setTimeout(() => {
        progressBar.style.width = `${skillLevel}%`;  // กำหนดความกว้างของแถบ
      }, 500);  // ดีเลย์เล็กน้อยเพื่อให้การแสดงผลดูเป็นธรรมชาติ
    });
  });
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });  