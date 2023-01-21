<template>

</template>

<script>
import {Day, Month, Weekday} from "dayspan";

let categories = [
  {
    id: 0,
    name: "Sweets",
  },
  {
    id: 1,
    name: 'Vegan',
  },
  {
    id: 2,
    name: 'Vegetarian',
  },
  {
    id: 3,
    name: 'Meat',
  },
  {
    id: 4,
    name: 'Fish',
  }
];
let authors = [
  {
    id: 0,
    name: 'Laura Hiller',
    description: 'Hi! Mein Name ist Laura und koche schon mein Leben lang. Ich experimentiere gerne mit Rezepten aus aller Welt und erweitere stets meinen kullinarischen Horizont. :)',
    image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 1,
    name: 'Mark Heather',
    description: 'Hi! Mein Name ist Mark und koche schon mein Leben lang. Ich experimentiere gerne mit Rezepten aus aller Welt und erweitere stets meinen kullinarischen Horizont. :)',
    image: 'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Mary Luciane',
    description: 'Hi! Mein Name ist Mary und koche schon mein Leben lang. Ich experimentiere gerne mit Rezepten aus aller Welt und erweitere stets meinen kullinarischen Horizont. :)',
    image: 'https://images.pexels.com/photos/7710127/pexels-photo-7710127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 3,
    name: 'Cathrine Martinez',
    description: 'Hi! Mein Name ist Cathrine und koche schon mein Leben lang. Ich experimentiere gerne mit Rezepten aus aller Welt und erweitere stets meinen kullinarischen Horizont. :)',
    image: 'https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 4,
    name: 'Joshua Lewis',
    description: 'Hi! Mein Name ist Joshua und koche schon mein Leben lang. Ich experimentiere gerne mit Rezepten aus aller Welt und erweitere stets meinen kullinarischen Horizont. :)',
    image: 'https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    name: 'Lisa Bryan',
    description: 'Hi! Mein Name ist Lisa und koche schon mein Leben lang. Ich experimentiere gerne mit Rezepten aus aller Welt und erweitere stets meinen kullinarischen Horizont. :)',
    image: 'https://images.pexels.com/photos/6205523/pexels-photo-6205523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];
let recipes = [
  {
    id: 1,
    title: 'Wiener Kaiserschmarrn',
    description: 'Der traditionalle Wiener Kaiserschmarrn.',
    categories: [
      categories[0].name,
      categories[2].name
    ],
    author: {
      name: authors[0].name,
      image: authors[0].image,
      description: authors[0].description,
    },
    ingredients: [
      'Flour: 200g',
      'Sugar: 30g',
      'Salt: 1 pinch',
      'Eggs: 4 pieces',
      'Milk: 330 ml',
      'Butter: 40g',
      'Powdered sugar: 1 pinch'
    ],
    steps: [
      'Mehl, Eier und Zucker mit einer Prise Salz in einer Schüssel verrühren',
      'Eine Pfanne mit Butter befetten und anschließen erhitzen.',
      'Sobald die Pfanne erhitzt ist, den zusammengerührten Teig hineingießen und bei mittlerer Hitze gold-braun anbraten.',
      'Den angebratenen Teig in Vierteln schneiden und anschließend wenden.',
      'Die gewändeten Stücke auf der Unterseite leicht anbraten lassen und in einzelne Teile reißen.',
      'Zur Zubereitung den Kaiserschmarrn noch mit einer Prise Staubzucker verfeinern und genießen. :)',
    ],
    date: '12.03.2022',
    img: 'https://img.freepik.com/free-photo/top-view-kaiserschmarrn-with-torn-pancakes-cranberries-jam-apple-puree-table_181624-57311.jpg?t=st=1654079754~exp=1654080354~hmac=8100bae936462a6cf381ddca5a027e4b10049aa0dd805749f698b885e0f15143&w=1800',
    rating: 5,
  },
  {
    id: 2,
    title: 'Spaghetti alla Napoli',
    description: 'Das originale neapolitanische Rezept für Spaghetthi.',
    categories: [
      categories[2].name,
      categories[1].name,
    ],
    author: {
      name: authors[4].name,
      image: authors[4].image,
      description: authors[4].description,
    },
    ingredients: [
      'Spaghetti: 170 g',
      'Tomaten (passata): 250 g',
      'Zwiebel 0.5 Stück',
      'Knoblauch: 1 Zehe',
      'Basilikum: 6 Blätter',
      'Parmesan: 30 g',
      'Olivenöl extra vergine: 2 EL',
      'Zucker: 0,5 TL',
      'Pfeffer: 1 Prise',
      'Salz: 2 EL',
    ],
    steps: [
      'Kochwasser für die Pasta aufsetzen, salzen und parallel zur Herstellung des Sugos die Spaghetti al dente kochen (nach unserer Anleitung Nudeln richtig kochen).',
      'Zwiebel fein hacken, Basilikum zerrupfen und Parmesan reiben.',
      'Öl in einem Topf erhitzen und die Knoblauchzehe darin leicht bräunen, dann diese herausnehmen und wegwerfen.',
      'Zwiebel ins Öl geben und dünsten, bis sie glasig ist.',
      'Tomaten, Basilikum und Zucker hinzufügen, leicht salzen und pfeffern und dann 20 Minuten bei geringer Temperatur köcheln.',
      'Die abgegossenen Nudeln auf Teller verteilen und mit dem Tomatensugo und dem geriebenen Käse servieren.',
    ],
    date: '05.03.2022',
    img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
  },
  {
    id: 3,
    title: 'Fruchttorte',
    description: 'Eine leckere Fruchttorte für warme Sommertage.',
    categories: [
      categories[0].name,
      categories[2].name
    ],
    author: {
      name: authors[0].name,
      image: authors[0].image,
      description: authors[0].description,
    },
    ingredients: [
      'Weizenmehl: 260 g',
      'Butter: 80 g',
      'Zucker: 320 g',
      'Marmelade: 3 EL',
      'Eier: 3 Stück',
      'Wasser: 2 EL',
      'Backpulver: 0.5 TL',
      'Semmelbrösel: 2 EL',
      'Sahne: 350 g',
      'Bourbon-Vanillezucker: 1 Pkg',
      'Sahnesteif: 1 Pkg',
      'Obst: 700 g',
      'Tortenguss: 1 Pkg.',
      'Mandelblättchen: 130 g',
    ],
    steps: [
      'Für den dünnen Mürbeteigboden Mehl, Zucker und die kalte Butter in Stückchen in eine Schüssel geben. Zügig miteinander verkneten, zu einer Kugel formen und eingewickelt ca. 30 Minuten in den Kühlschrank legen.',
      'Den Backofen auf 180 Grad Ober- und Unterhitze vorheizen. Den Boden einer 26 cm großen Springform mit Backpapier belegen. Den Mürbteig dünn auf Größe des Bodens ausrollen, z.B. zwischen Folie, und 15 Minuten vorbacken. Währenddessen den Biskuitteig vorbereiten, sodass er ebenfalls nach etwa 15 Minuten fertig ist.',
      'Dafür Eier und Wasser einige Minuten lang hell schaumig schlagen. Dabei nach und nach Zucker einrieseln lassen. Mehl mit Backpulver mischen und ganz vorsichtig locker unterheben. Dabei auf keinen Fall zu viel rühren, damit die Luft möglichst wenig entweicht.',
      'Nach 15 Minuten Backzeit den Mürbteig aus dem Ofen holen, mit 2-3 Esslöffeln glattgerührter Marmelade bestreichen, den Biskuitteig darauf verteilen und glattstreichen. Alles zusammen weitere 20 Minuten backen. Herausnehmen und abkühlen lassen. Dann den Biskuit waagrecht mithilfe eines scharfen großen Messers oder eines Fadens teilen, wobei der oberste Teil nur eine recht dünne Teigplatte sein soll. Das heißt, man schneidet einen dünnen Deckel vom Biskuit ab.',
      'Für die Füllung und das Einstreichen des Rands Sahne mit Vanillezucker und Zucker steif schlagen, dabei Sahnesteif einrieseln lassen.',
      'Den Deckel vom Biskuit vorsichtig z.B. mit einem Tortenheber abnehmen und beiseite legen. Etwa zwei Drittel der geschlagenen Sahne auf dem unteren Biskuit verteilen, dann den dünnen Biskuitdeckel wieder auflegen. 1-2 Esslöffel Semmelbrösel darüber streuen, damit der Boden nicht durch das Obst durchweicht.',
      'Das Obst vorbereiten, also waschen, entkernen, nach Belieben in Würfel oder Scheiben schneiden. Dann auf der Torte verteilen. Für den Guss das Pulver mit dem Zucker mischen und in 250 ml kaltes Wasser rühren. In einem kleinen Topf kurz aufkochen, eine Minute abkühlen lassen und gleichmäßig mit einem Löffel über dem Obst verteilen.',
      'Mandelblättchen in einer Pfanne ohne Fett kurz anrösten, sodass sie etwas Farbe bekommen und leicht duften. Abkühlen lassen. Den Rand der Torte mit der restlichen Schlagsahne ganz dünn einstreichen und die Mandelblättchen an den Rand drücken, z.B. mit einem Teigschaber oder den Händen. Torte vor dem Anschneiden kurz kühl stellen.',
      'Durch die Kombination aus einem dünnen, mürbe Keksboden, mit Vanillesahne gefülltem fluffigem Biskuit und dem fruchtigen Belag wird die Torte besonders lecker. Wenn es schnell gehen muss, kann man sich das Teilen des etwas höheren Biskuits sparen und einen flacheren Teig auf Basis von 2 Eiern zubereiten. Darauf kommen dann direkt Sahne und Obst.',
      'Zum Belegen eignen sich z.B. frische Beeren (Erdbeeren am besten in Scheiben schneiden oder vierteln), Kiwi-Scheiben, Bananen-Scheiben, Physalis, Mango-Würfel und Ananasstücke aus der Dose. Je nachdem, wie hoch die Fruchtschicht werden soll und ob man das Obst sehr klein schneidet oder größer lässt, braucht man insgesamt ca. 600-800 Gramm.',
    ],
    date: '15.03.2022',
    img: 'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
  },
  {
    id: 4,
    title: 'Ahi Thunfisch Steaks',
    description: 'Schmackhafte Thunfisch Steaks auf einem Gemüseberg',
    categories: [
      categories[4].name
    ],
    author: {
      name: authors[3].name,
      image: authors[3].image,
      description: authors[3].description,
    },
    ingredients: [
      'Ahi Thunfisch - Steaks (Sushiqualität): 2 Stück',
      'Öl, neutrales oder gewürztes Woköl: 2 EL',
      'Pfeffer, ganz (Szechuanpfeffer): 2 TL',
      'Salz (am besten Fleur de Sel): 1 TL',
      'Cayennepfeffer: 1 Prise',
    ],
    steps: [
      'Thunfischsteaks waschen und trocken tupfen.',
      'Im Mörser die Szechuanpfefferkörner mit etwas Cayennepfeffer und dem Salz zerstoßen und den Thunfisch damit würzen.',
      'Meiner Meinung nach ist absolut keine Zitrone o.ä. erforderlich!',
      'Grillpfanne oder normale Pfanne mit dem Öl heiß werden lassen und den Thunfisch so braten, dass er innen aber noch einen deutlich rohen "Kern" hat.',
      'Dazu passt Reis und Salat.',
    ],
    date: '27.05.2022',
    img: 'https://www.simplyrecipes.com/thmb/h3vmpNn2nfPoejM2eu7GlF4nmhw=/3900x2600/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Seared-Ahi-Tuna-LEAD-2-7d0de98ff4b94257b2a665357a2940df.jpg',
    rating: 4,
  },
  {
    id: 5,
    title: 'Beerenpunsch',
    description: 'Das perfekte Heißgetränk zum Wohlfühlen für die kalte Jahreszeit.',
    categories: [
      categories[0].name
    ],
    author: {
      name: authors[5].name,
      image: authors[5].image,
      description: authors[5].description,
    },
    ingredients: [
      'Wasser: 1,8 l',
      'Waldfrüchtesaft: 700 ml',
      'Orangensaft: 600 ml',
      'Zimtstange: 1 Stück',
      'Zimtnelke: 3 Stück',
      'Beerentee: 5 Teebeutel',
      'Rum: 100 ml',
      'Rotwein: 100 ml',
      'Zucker: 1,5 EL',
      'Gefrorene Heidelbeeren: 60 g',
      'Gefrorene Himbeeren: 50 g',
      'Gefrorene Erdbeeren: 120 g',
    ],
    steps: [
      'Zuerst das Wasser in einem großen Topf zum Kochen bringen.',
      'Danach alle Teebeutel gemeinsam mit den Zimtnelken und der Zimtstange für 9 Minuten ziehen lassen.',
      'Anschließend Teebeutel, Zimtstange und Zimtnelken wieder entfernen',
      'Nun werden die Beeren und der Zucker hineingegeben.',
      'Anschließend den Rum, Rotwein, Orangensaft und Waldfrüchtesaft hinzufügen.',
      'Den Punsch noch einmal kurz aufkochen lassen und diesen anschließend in Tassen füllen.',
    ],
    date: '19.12.2021',
    img: 'https://cdn.pixabay.com/photo/2016/11/28/21/58/punch-1866144_1280.jpg',
    rating: 5,
  },
  {
    id: 6,
    title: 'Lasagne Bolognese',
    description: 'Eine Lasagne aus Lasagneblättern, einer cremigen Béchamelsauce und einem Bolognese Ragù.',
    categories: [
      categories[3].name
    ],
    author: {
      name: authors[1].name,
      image: authors[1].image,
      description: authors[1].description,
    },
    ingredients: [
      'Knoblauch: 1 Zehe',
      'Zwiebel: 1',
      'Karotten: 2 Stück',
      'Rinderhackfleisch: 500 g',
      'stückige Tomaten aus der Dose: 800 g',
      'getrockneter Oregano: 2 TL',
      'ungesalzene Butter: 50 g',
      'Mehl: 40 g',
      'Milch: 500 ml',
      'gemahlene Muskatnuss: 0,25 TL',
      'Lasagneplatten: 150 g',
      'Parmesankäse: 60 g',
      'Olivenöl: 10 ml',
      'Salz: 1 TL',
      'Pfeffer: 1 Prise',
    ],
    steps: [
      'Knoblauch fein hacken. Zwiebel und Karotten schälen und würfeln.',
      'Etwas Olivenöl in einer großen Pfanne erhitzen und die Zwiebeln, Karotten und Knoblauch anbraten.',
      'Das Rinderhackfleisch mit Hilfe eines Kochlöffels gleichmäßig anbraten. Mit Salz und Pfeffer abschmecken.',
      'Dann die gehackten Tomaten hinzugeben und erneut mit Salz und Pfeffer würzen.',
      'Mit geschlossenem Deckel bei mittlerer Hitze für etwa 15-20 Min. köcheln lassen.',
      'Den getrockneten Oregano einrühren.',
      'Den Ofen auf 200°C vorheizen.',
      'Für die Béchamelsauce, die Butter in einem kleinen Topf schmelzen.',
      'Mehl dazugeben und unter Rühren anrösten.',
      'Nach und nach und unter ständigem Rühren kalte Milch hinzugeben und die Hitze reduzieren, für etwa 5-8 Min.',
      'Mit Muskat, Salz und Pfeffer abschmecken.',
      'Den Boden der Auflaufform mit Olivenöl und danach mit einer Schicht Béchamel bedecken.',
      'Jetzt erst Lasagneblätter, dann Bolognese, mehr Béchamelsauce und Parmesan nacheinander schichten.',
      'Wiederholen, bis alle Zutaten aufgebraucht sind.',
      'Mit der restlichen Béchamel abschließen.',
      'Den restlichen Parmesan hinzugeben und in einem vorgeheizten Ofen bei 200°C/390°F auf der mittleren Schiene für etwa 30-40 Min. backen, oder bis die Oberseite golden ist.',
      'In der heißen Auflaufform servieren.',
      'Guten Appetit!',
    ],
    date: '21.05.2022',
    img: 'https://images.pexels.com/photos/5949922/pexels-photo-5949922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 3,
  },
  {
    id: 7,
    title: 'Caesar Salat',
    description: 'Das Grundrezept für einen der bekanntesten Salate weltweit.',
    categories: [
      categories[1].name,
      categories[2].name,
    ],
    author: {
      name: authors[3].name,
      image: authors[3].image,
      description: authors[3].description,
    },
    ingredients: [

      'Baguette (für die Croutons): 1 Stück',
      'Olivenöl (für die Croutons): 2 EL',
      'Knoblauchzehe (für die Croutons): 1 Stück',
      'Knoblauchzehen: 1	Stück',
      'Parmesan (frisch gerieben): 20 g',
      'Rotweinessig: 1	EL',
      'scharfer Senf: 1 TL',
      'Olivenöl: 80 ml',
      'Römersalat: 1	Kopf',
      'Pfeffer: 1 Prise',
      'Eidotter: 2	Stück',
      'Zwiebel: 2 Stück',
    ],
    steps: [
      'Für die Croutons, das Baguette in kleine Würfel schneiden. Das Öl in einer großen Pfanne erhitzen.',
      'Die Knoblauchzehe schälen, pressen und ins Öl reingeben- rühren. Hitze herunterdrehen und die Baguettewürfel in die Pfanne geben.',
      'Unter ständigem Rühren von allen Seiten leicht anbräunen. Dann auf einem Teller abkühlen lassen.',
      'Für das Dressing, die 2 Sardellen etwas kleinschneiden, Knoblauchzehen grob zerkleinern.',
      'In einem schmalen, hohen Gefäß Sardellen, Knoblauch, Parmesan, Essig, Senf und Eidotter mit dem Mixstab glattmixen.',
      'Das Öl in einem feinen Strahl zugeben, dabei weiterrühren, bis eine cremige Sauce entsteht. Mit Pfeffer abschmecken.',
      'Römersalat putzen und waschen. Blätter in mundgerechte Stücke zupfen.',
    ],
    date: '01.06.2022',
    img: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
  },
];
let posts = [
  {
    id: 0,
    title: 'Ein gesunder Snack für zwischendurch',
    categories: [
      categories[0].name
    ],
    author: {
      name: authors[0].name,
      image: authors[0].image,
    },
    date: '14.05.2022',
    img: 'https://images.pexels.com/photos/7937338/pexels-photo-7937338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 1,
    title: 'Das perfekte Rezept für einen köstlichen mediteranen Flair',
    categories: [
      categories[2].name
    ],
    author: {
      name: authors[1].name,
      image: authors[1].image,
    },
    date: '12.01.2022',
    img: 'https://images.pexels.com/photos/6632288/pexels-photo-6632288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Der mexikanische Klassiker: die Tacos',
    description: 'Mexikanische Tacos mit Reis und einer Rindsauce.',
    categories: [
      categories[3].name
    ],
    author: {
      name: authors[5].name,
      image: authors[5].image,
      description: authors[5].description,
    },
    date: '19.03.2022',
    img: 'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 3,
  },
];

let randomId = random();

function random() {
  return Math.floor(Math.random() * 6);
}

function anotherRandomId() {
  return (randomId > 0) ? randomId - 1 : randomId + 1;
}

/*
This function sorts the array <collection> descending by date and returns a new collection of the top <nrElements> elements
 */
function sortByDate(collection, nrElements) {
  return collection.slice().sort((a, b) => {
    if (Date.parse(a.date) < Date.parse(b.date)) {
      console.log(a.date)
      return 1;
    } else if (Date.parse(a.date) > Date.parse(b.date)) {
      console.log(Date.parse(b.date))
      return -1;
    } else {
      return 0;
    }
  }).reverse().slice(0, nrElements);
}

/*
This function returns a collection of recipes which share the same primary category
 */
function getRecipesByCategory(category) {
  let tmpRecipes = [];
  recipes.forEach((recipe) => {
    if (recipe.categories[0] === category.name) {
      tmpRecipes.push(recipe);
    }
  })
  return tmpRecipes;
}

/*
This function returns the id of the first recipe with a specific title
 */
function getRecipeIdByTitle(title) {
  let id = 0;
  recipes.forEach((recipe) => {
    if (recipe.title === title) {
      id = recipe.id;
    }
  });
  return id;
}

export {recipes}
export {categories}
export {authors}
export {posts}
export {randomId}
export {anotherRandomId}
export {random}
export {sortByDate}
export {getRecipesByCategory}
export {getRecipeIdByTitle}

export default {
  data() {
    return {
      recipes,
      categories,
      authors,
      posts,
      randomId,
      anotherRandomId,
      random,
      sortByDate,
      getRecipesByCategory,
      getRecipeIdByTitle,
    }
  }
}
</script>

<style scoped>

</style>
