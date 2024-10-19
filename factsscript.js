const facts = [
    "Ocean Acidification is 30% higher now than in pre-industrial times.",
    "Ocean Warming and sea-level rise affects marine ecosystems.",
    "75-199 million tons of plastic is in the ocean.",
    "More than a third of global fish stocks are overfished.",
    "Emissions of plastic waste into aquatic ecosystems are predicted to triple by 2040 without meaningful action.",
    "More than 1 million seabirds and 100,000 marine animals die from plastic pollution every year.",
    "100% of baby sea turtles have plastic in their stomachs.",
    "There is now 5.25 trillion macro and micro pieces of plastic in our ocean & 46,000 pieces in every square mile of ocean, weighing up to 269,000 tonnes.",
    "There is an estimated 75 to 199 million tons of plastic waste currently in our oceans, with a further 33 billion pounds of plastic entering the marine environment every single year.",
    "Every day around 8 million pieces of plastic makes their way into our oceans.",
    "The Great Pacific Garbage Patch is around 1.6 million square kilometers – bigger than Texas.",
    "The world produces 381 million tonnes of plastic waste yearly – this is set to double by 2034.",
    "50% of this is single-use plastic & only 9% has ever been recycled.",
    "Over 2 million tonnes of plastic packaging are used in the UK each year.",
    "88% of the sea's surface is polluted by plastic waste.",
    "Between 8 to 14 million tonnes enters our ocean every year.",
    "Plastic packaging is the biggest culprit, resulting in 80 million tonnes of waste yearly from the US alone.",
    "Our actions over the 10 years will determine the state of the ocean for the next 10,000 years to come.",
    "The world uses over 500 billion plastic bags a year – that’s 150 for each person on Earth.",
    "8.3 billion plastic straws pollute the world’s beaches, but only 1% of straws end up as waste in the ocean.",
    "1 in 3 fish caught for human consumption contains plastic.",
    "Plastic microbeads are estimated to be one million times more toxic than the seawater around it.",
    "79% of plastic waste is sent to landfills or the ocean, while only 9% is recycled, and 12% gets incinerated.",
    "165 million tonnes of plastic currently circulates in Earth's marine environments.",
    "Plastic has been found as far as 11km deep, contaminating the most remote places on Earth.",
    "Marine plastic pollution has affected 100% of marine turtles, 59% of whales, 36% of seals and 40% of seabirds of those examined.",
    "Over 1 million seabirds and 100,000 marine mammals are killed by ocean plastic every year.",
    "700 species of marine animals are in danger of extinction due to plastic.",
    "The population of tuna has declined by 74% since 1970, and 1 in 4 shark species is threatened with extinction.",
    "1 in 3 marine animals have been found tangled in plastic.",
    "Over 90% of all seabirds have plastic in their stomachs.",
    "705,000 tonnes of discarded fishing nets drown mammals including seals – this is known as ‘ghost fishing’.",
    "More than two-thirds of the world’s fish stocks are suffering from plastic ingestion.",
    "20% of all plastic waste in the sea comes from marine sources such as nets, ropes, and lines.",
    "32% of plastic waste found was cigarette filters, 9% was food packaging, 8% bottle caps, and 6% tableware.",
    "60% of the materials that form clothing are forms of plastic (Nylon, acrylic, polyester, etc).",
    "100,000 marine animals are killed by plastic bags. ",
    "Up to one trillion plastic bags are used worldwide each year – that’s 160,000 a second.",
    "Less than 1 in 7 plastic bags are recycled.",
    "A plastic bag is used on average for 15 minutes.",
    "Plastic straws only make up about 1% of the plastic waste in the sea.",
    "We have produced over 320 million tonnes of plastic – this is set to double by 2034.",
    "70% of Earth’s oxygen is produced by marine plants.",
    "30% of our CO2 emissions are absorbed by the oceans.",
    "The lack of oxygen in dead zones causes marine life to migrate to new areas – disrupting the balance of marine life in other parts.",
    "It’s estimated seafood lovers eat 11,000 pieces of toxic plastic every year.",
    "Microplastic can be found in tap water, beer and salt.",
    "Numerous chemicals used to produce plastic are known to be carcinogenic and to interfere with the body’s hormone system causing reproductive, neurological, and immune disorders in both humans and wildlife.",
    "Excessive marine pollution has created 500 dead zones.",
    "Only 10 river systems contribute to 90% of the plastic that flows into the sea."
];

function showFact() {
    const factText = document.getElementById("fact-text");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
}

let population = 0;
    const growthRatePerSecond = 47; // Approximate world population growth per second

    function updatePopulation() {
      population += growthRatePerSecond; // Increment population
      document.getElementById('populationCounter').textContent = population.toLocaleString();
    }

    setInterval(updatePopulation, 100); // Update every second

// Chart.js: Render a chart to show data
const ctx = document.getElementById('factsChart').getContext('2d');
const factsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Milk Carton', 'Aluminum Can', 'Plastic Bottle', 'Styrofoam', 'Fishing Line'],
        datasets: [{
            label: 'Average time taken to decompose',
            data: [5, 140, 450, 500, 600],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
