
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const expandProjects = document.querySelector("#expand-projects");
const hiddenProjects = document.querySelectorAll(".hidden");

const navLinks = document.querySelectorAll('a[href^="#"]');

const Projects = document.querySelectorAll(".project");
const modal = document.querySelector(".modal");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })
  
  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

expandProjects.addEventListener("click", () => {
    console.log(hiddenProjects);
    hiddenProjects.forEach(p => p.classList.toggle("hide"));
    
    if (expandProjects.textContent === "SEE MORE PROJECTS") {
        expandProjects.textContent = "SEE LESS";
    } else {
        expandProjects.textContent = "SEE MORE PROJECTS";
    }
})



navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


Projects.forEach(p => p.addEventListener("click", () => {
  var body = document.body;
  body.classList.toggle('modal-open');

  x = p.querySelector(".project-title").textContent;
  folderName = x.toLowerCase();
  
  const modalImg = modal.querySelectorAll("img")
  console.log(modalImg);

  for (let i = 0; i < 10; i++) {
    imgNum = i+1
    modalImg[i].src = "./assets/content/" + folderName + "/1 (" + imgNum + ").jpg";
  }
  
  
  
  modal.classList.toggle("modal-active");

  modal.addEventListener('click', () => {
    body.classList.remove('modal-open');
    modal.classList.remove("modal-active");
  })
}))