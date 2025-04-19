document.getElementById('generateBtn').addEventListener('click', generateStory);
document.getElementById('name').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    generateStory();
  }
});

function generateStory() {
  const name = document.getElementById('name').value || 'a mysterious person';
  
  const stories = [
    `${name} found a magic banana that could sing opera. The banana's high notes shattered all the windows in town.`,
    `One day, ${name} was chased by a gang of angry squirrels demanding peanut butter. It was a nutty situation.`,
    `${name} discovered that their pet goldfish was actually a secret agent working for the underwater mafia.`,
    `While gardening, ${name} accidentally grew a pumpkin so big it needed its own zip code.`,
    `${name} entered a staring contest with a statue and lost after 3 days when they blinked.`,
    `To everyone's surprise, ${name} won the annual pancake flipping championship using only a spatula and pure determination.`,
    `${name} woke up to find all their socks had gained consciousness and were demanding better living conditions.`,
    `During a rainstorm, ${name} discovered the clouds were actually made of cotton candy. The neighborhood kids went wild.`,
    `${name} befriended a lonely ghost in the attic, and together they started a successful podcast about the afterlife.`,
    `The local zoo hired ${name} as a temporary penguin trainer, but things got awkward when the penguins started giving orders.`
  ];
  
  const storyElement = document.getElementById('story');
  storyElement.classList.remove('fade-in');
  
  setTimeout(() => {
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    storyElement.textContent = randomStory;
    storyElement.classList.add('fade-in');
  }, 10);
}
