const stories = [
  "The {adjective} {noun} {verb} over the {adjective} moon.",
  "A {noun} and a {noun} walked into a {place}... it was {adjective}!"
];

const words = {
  adjective: ["crazy", "sparkly", "giant", "smelly"],
  noun: ["unicorn", "taco", "robot", "banana"],
  verb: ["danced", "flew", "exploded", "sang"],
  place: ["library", "beach", "volcano", "mall"]
};

function generateStory() {
  const randomStory = stories[Math.floor(Math.random() * stories.length)];
  let story = randomStory;

  // Replace placeholders with random words
  story = story.replace(/{(\w+)}/g, (match) => {
    const key = match.slice(1, -1); // Remove { and }
    const randomWord = words[key][Math.floor(Math.random() * words[key].length)];
    return randomWord;
  });

  document.getElementById("story").textContent = story;
}

document.getElementById("generate").addEventListener("click", generateStory);
