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

// These transcriptions preserve the words and line breaks on Dad's typed pages.
// To add audio, put files in an "audio" folder beside index.html and set the path.
const poems = [
  {
    title: "Lefty",
    note: "My dad wrote this poem for me. I don't remember what prompted it.",
    text: `There was an old man called lefty.
He was short and just a bit hefty.
He had a left handed handle on a
Left-handed hoe
And he'd hoe only weeds in the left-
Handed rows.

There in a row that lefty had hoed
He spotted what looked like a left-
Handed toad.
Now,left-handed toads aren't easy
To spy.
They have regular warts and toadish
Type eyes.
But sure as there's left-handed clouds
In the skies.
Left-handed toads eat left-handed flies.

Old lefty's garden was one of a kind.
There were left-handed melons on left-
Handed vines.
There were left-handed potatoes
With left-handed eyes
But there was only one toad which eats
Left-handed flies.

Now, there in the middle stands lefty's
Scarecrow
That would scare only left-handed crows
As you know.
As for left-handed crows, they aren't
Easy to scare
But scare them he did, out of their
Underware.

This story could go on for hours on end
But I've taken enough of your time my
Friend
For bending an ear is what I do best
So I better stop now while there is
Story LEFT.`,
    original: "images/lefty-original.jpg",
    audio: ""
  },
  {
    title: "To my children",
    text: `If perhaps someday
I become senile.
Bare with me, as
I bore with you
Through the senility
Of your youth.`,
    original: "images/to-my-children-original.jpg",
    audio: ""
  },
  {
    title: "Listen",
    text: `Listen, can you hear it.
Listen carefully, its there.
Maybe if you were to sit.
Sit quietly now, its everywhere.
Its the sound of death.
Yes someone is dying.
You can feel his breath.
Listen, his soul is crying.
Someone spoke of violence.
I'm not sure what was said.
Now you can hear the silence.
The dying man must be dead.`,
    original: "images/listen-original.jpg",
    audio: ""
  },
  {
    title: "Rainbows and Flowers",
    text: `Rainbows and flowers, the color of my love.
Minutes and hours spent thinking of my love.

The breath of spring that greens the grass
And brings the morning dew
Is but one of the many things reminding me of you.

The twinkle in a childs eyes is but love in disguise
And innocence can do no wrong, don't you know.

Well, there are times within my mind
Although I search I can't find
The words to discribe how I fell.

But when it comes to a perfect love
Simple words are not enough
Actions make memories forever.

So come with me and we'll share love
Underneath the stars above
And we'll watch the sun rise together.

Rainbows and flowers, minutes and hours,
The Twinkle in a childs eyes reminds me of you.`,
    original: "images/rainbows-and-flowers-original.jpg",
    audio: ""
  }
];

const poemDialog = document.querySelector("#poemDialog");
const poemAudio = document.querySelector("#poemAudio");
const poemAudioWrap = document.querySelector("#poemAudioWrap");
const poemAudioNote = document.querySelector("#poemAudioNote");
const poemOriginal = document.querySelector("#poemOriginal");
const poemNote = document.querySelector("#poemNote");

poems.forEach((poem) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "poem-select";
  const title = document.createElement("span");
  title.className = "poem-select-title";
  title.textContent = poem.title;
  const arrow = document.createElement("span");
  arrow.className = "poem-select-arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  button.append(title, arrow);
  button.addEventListener("click", () => {
    document.querySelector("#poemTitle").textContent = poem.title;
    poemNote.textContent = poem.note || "";
    poemNote.hidden = !poem.note;
    document.querySelector("#poemText").textContent = poem.text;
    poemOriginal.href = poem.original;
    if (poem.audio) {
      poemAudio.src = poem.audio;
      poemAudioWrap.hidden = false;
      poemAudioNote.hidden = true;
    } else {
      poemAudio.removeAttribute("src");
      poemAudioWrap.hidden = true;
      poemAudioNote.hidden = false;
    }
    poemDialog.showModal();
  });
  document.querySelector("#poemList").append(button);
});

document.querySelector("#poemClose").addEventListener("click", () => poemDialog.close());
poemDialog.addEventListener("click", (event) => {
  if (event.target === poemDialog) poemDialog.close();
});
poemDialog.addEventListener("close", () => {
  poemAudio.pause();
  poemAudio.currentTime = 0;
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
