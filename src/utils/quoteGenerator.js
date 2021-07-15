export const quotes = [
    { author: "placeholder", quotation: "placeholder quotation", id: 0 },
    {
      author: "Kevin McCloud",
      quotation:
        "\"Every decently-made object, from a house to a lamp post to a bridge, spoon or egg cup, is not just a piece of 'stuff' but a physical embodiment of human energy, testimony to the magical ability of our species to take raw materials and turn them into things of use, value and beauty.\"",
      id: 1
    },
    {
      author: "Kevin McCloud",
      quotation:
        '"So, agricultural barn meets domestic dwelling. Magical mothership meets metal warehouse. Rational and clinical meets soft and soulful."',
      id: 2
    },
    {
      author: "Kevin McCloud",
      quotation:
        "\"It's possible to be satisfied with a day's work or a cake, but a life... what is a life but a history of events badly remembered?\"",
      id: 3
    },
    {
      author: "Kevin McCloud",
      quotation:
        "\"Of course, there are many ways to work together, many ways to demonstrate that a building can be greater than the sum of its parts. That is doesn't need to be the result of one individual's dogma. And therein lies the brilliance of collaboration.\"",
      id: 4
    },
    {
      author: "Kevin McCloud",
      quotation:
        '"We are borrowing money from future generations. We are borrowing the carbon impact, the resource impact from future generations to get stuff cheap now. We have swept the dirt and dust from our society under the carpet - but this carpet is on other side of the planet."',
      id: 5
    },
    {
      author: "Kevin McCloud",
      quotation:
        "\"How do you define modern family life? Well, I'd argue it's down to three things. A chaotic, relentless diary, plastic play furniture everywhere and a general anxiety about where the children are and what they're doing right now to each other.\"",
      id: 6
    },
    {
      author: "Kevin McCloud",
      quotation:
        '"You might baulk at the amounts of materials and energy that have gone into making it, but buildings don\'t just happen. They have to be willed, forced and wrangled into existence. And, in this case, its costs are incalculable, because the greatest amount of energy in a building like this, is human energy. At times, it even seems superhuman."',
      id: 7
    },
    {
      author: "Kevin McCloud",
      quotation:
        '"After all, why, when life itself is defined by, bound up with, the ideas of craftsmanship and utility, by the acts of making and doing, why would you want it to ever end?"',
      id: 8
    },
    {
      author: "Socrates",
      quotation:
        '"True wisdom comes to each of us when we realise how little we understand about life, ourselves, and the world around us."',
      id: 9
    },
    {
      author: "Montgomery Burns",
      quotation:
        '"Family, religion, friendship. These are the three demons you must slay if you wish to succeed in business."',
      id: 10
    },
    {
      author: "Des'Ree",
      quotation:
        "\"I don't want to see a ghost, it's a sight that I fear most. I'd rather have a piece of toast and watch the evening news.\"",
      id: 11
    },
    {
      author: "David Brent",
      quotation:
        "\"I don't look upon this like it's the end, I look upon it like it's moving on you know. It's almost like my work here's done. I can't imagine Jesus going 'Oh, I've told a few people in Bethlehem I'm the son of God, can I just stay here with Mum and Dad now?' No. You gotta move on. You gotta spread the word. You gotta go to Nazareth, please. And that's, very much like... me.\"",
      id: 12
    },
    {
      author: "Dalai Lama",
      quotation:
        '"People take different roads seeking fulfillment and happiness. Just because they’re not on your road doesn’t mean they’ve gotten lost."',
      id: 13
    }
  ];

const randomInteger = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;
  

const getQuote = (arr) => {
    let randomIndex = randomInteger(1, quotes.length - 1);
    let randomQuote = arr[randomIndex];
    return randomQuote;
  }

export const newQuote = () => getQuote(quotes);
