const allStories = [
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/In-Story.web.jpeg"
    },
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/o32l_instagram-cloth2.jpg"
    },
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/In-Story.web.jpeg"
    },
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/o32l_instagram-cloth2.jpg"
    },
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/In-Story.web.jpeg"
    },
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/In-Story.web.jpeg"
    },
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/o32l_instagram-cloth2.jpg"
    },
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/In-Story.web.jpeg"
    },
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/In-Story.web.jpeg"
    },
    {
        thumbUrl: "image/In-Story.Cover.jpeg",
        imageUrl: "image/o32l_instagram-cloth2.jpg"
    },
];
const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".story-full");
const storyFullImage = document.querySelector(".story-full img");
const closeBtn = document.querySelector(".story-full .close-btn");
const leftArrow = document.querySelector(".story-full .left-arrow");
const rightArrow = document.querySelector(".story-full .right-arrow");
let currentIndex = 0;
let timer;

allStories.forEach((s, i) => {
    const content = document.createElement("div");
    content.classList.add("content");
    const img = document.createElement("img");
    img.setAttribute("src", s.thumbUrl);
    storiesContainer.appendChild(content);
    content.appendChild(img);
    content.addEventListener("click", () => {
        currentIndex = i;
        storyFull.classList.add("active");
        storyFullImage.setAttribute("src", s.imageUrl);
        clearInterval(timer);
        timer = setInterval(nextStory, 2500);
    });
});

closeBtn.addEventListener("click", () => {
    storyFull.classList.remove("active");
});

leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);
        clearInterval(timer);
        timer = setInterval(nextStory, 2500);
    }
});

const nextStory = () => {
    if (currentIndex < allStories.length - 1) {
        currentIndex += 1;
        storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);
    }
}
rightArrow.addEventListener("click", () => {
    nextStory();
    clearInterval(timer);
    timer = setInterval(nextStory, 2500);
});