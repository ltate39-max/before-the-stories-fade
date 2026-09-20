const stories = {
  alaska: {
    chapter: "Chapter 01 · Minnesota to Alaska",
    title: "The Long Walk North",
    copy: "This chapter will begin with the question Leslie has carried for years: Why Alaska? His recorded answer can become the thread connecting a map, photographs, memories, and the details of the journey he can still recall."
  },
  vietnam: {
    chapter: "Chapter 02 · Vietnam",
    title: "The Story He Brought Home",
    copy: "This can be a quieter chapter, shaped by what he wants to share rather than by an attempt to tell the entire history of the war. His words, pauses, and chosen details will guide its form."
  },
  boeing: {
    chapter: "Chapter 03 · Boeing",
    title: "Building Something New",
    copy: "This chapter can place his personal memories beside a small amount of historical context about the early Boeing 747—showing both the scale of the aircraft and the individual person who helped build it."
  },
  climbing: {
    chapter: "Chapter 04 · Northwest Arkansas",
    title: "The Climber and the Caver",
    copy: "Photographs, locations, and his own explanation of what drew him underground and up rock faces can turn this chapter into an exploration of curiosity, risk, and reinvention."
  },
  storyteller: {
    chapter: "Chapter 05 · A lifetime of words",
    title: "The Storyteller",
    copy: "Here, the form and subject meet. The man whose constant talking fills family memories also deliberately became a storyteller, carrying stories beyond the family and into classrooms."
  },
  father: {
    chapter: "Chapter 06 · Our family",
    title: "The Father He Chose to Be",
    copy: "This is Leslie's chapter as much as his. It can weave together family photographs, her narration, and his memories of deciding to become a father—ending on the idea at the center of the entire project: he chose us."
  }
};

const dialog = document.querySelector("#storyDialog");
const dialogChapter = document.querySelector("#dialogChapter");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogCopy = document.querySelector("#dialogCopy");

document.querySelectorAll(".story-button").forEach((button) => {
  button.addEventListener("click", () => {
    const story = stories[button.dataset.story];
    dialogChapter.textContent = story.chapter;
    dialogTitle.textContent = story.title;
    dialogCopy.textContent = story.copy;
    dialog.showModal();
  });
});

document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#siteNav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const progressBar = document.querySelector("#progressBar");
window.addEventListener("scroll", () => {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percent = available > 0 ? (window.scrollY / available) * 100 : 0;
  progressBar.style.width = `${percent}%`;
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
