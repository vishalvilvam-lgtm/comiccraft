function generateComic() {
const story = document.getElementById("story").value.trim();
const genre = document.getElementById("genre").value;
const output = document.getElementById("output");

if (story === "") {
    output.textContent = "Please enter your story idea!";
    return;
}

output.textContent = "Generating your comic...";

setTimeout(function () {
    output.textContent =
        "🎬 COMIC TITLE: " + genre + " Adventure\n\n" +
        "📖 STORY IDEA: " + story + "\n\n" +
        "🟣 SCENE 1:\n" +
        "The story begins. Our hero discovers a new adventure.\n\n" +
        "🟣 SCENE 2:\n" +
        "An unexpected problem appears. The hero decides to face it.\n\n" +
        "🟣 SCENE 3:\n" +
        "After a challenging journey, the hero solves the problem.\n\n" +
        "⭐ THE END ⭐\n\n" +
        "Note: This is a sample story. Gemini AI will be connected next.";
}, 1000);

}