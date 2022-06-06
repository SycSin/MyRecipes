<template>

</template>

<script>
    let categories = [
      {
        id: 0,
        name: "Süßes",
      },
      {
        id: 1,
        name: 'Vegan',
      },
      {
        id: 2,
        name: 'Vegetarisch',
      },
      {
        id: 3,
        name: 'Fleisch',
      },
      {
        id: 4,
        name: 'Fisch',
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
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: 'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 2,
        name: 'Mary Luciane',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: 'https://images.pexels.com/photos/7710127/pexels-photo-7710127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: 3,
        name: 'Cathrine Martinez',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: 'https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
      {
        id: 4,
        name: 'Joshua Lewis',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: 'https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 5,
        name: 'Lisa Bryan',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        image: 'https://images.pexels.com/photos/6205523/pexels-photo-6205523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      },
    ];
    let recipes = [
      {
        id: 0,
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
        date: '12.03.2022',
        img: 'https://img.freepik.com/free-photo/top-view-kaiserschmarrn-with-torn-pancakes-cranberries-jam-apple-puree-table_181624-57311.jpg?t=st=1654079754~exp=1654080354~hmac=8100bae936462a6cf381ddca5a027e4b10049aa0dd805749f698b885e0f15143&w=1800',
        rating: 5,
      },
      {
        id: 1,
        title: 'Spaghetti alla Napoli',
        description: 'Das originale neapolitanische Rezept für Spaghetthi.',
        categories: [
          categories[1].name,
          categories[2].name
        ],
        author: {
          name: authors[4].name,
          image: authors[4].image,
          description: authors[4].description,
        },
        date: '05.03.2022',
        img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 4,
      },
      {
        id: 2,
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
        date: '15.03.2022',
        img: 'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5
      },
      {
        id: 3,
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
        date: '27.05.2022',
        img: 'https://www.simplyrecipes.com/thmb/h3vmpNn2nfPoejM2eu7GlF4nmhw=/3900x2600/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Seared-Ahi-Tuna-LEAD-2-7d0de98ff4b94257b2a665357a2940df.jpg',
        rating: 4,
      },
      {
        id: 4,
        title: 'Shakshouka mit Falafel',
        description: 'Die vegetarische Spezialität aus der nordafrikanischen Region.',
        categories: [
          categories[2].name
        ],
        author: {
          name: authors[5].name,
          image: authors[5].image,
          description: authors[5].description,
        },
        date: '19.05.2022',
        img: 'https://images.pexels.com/photos/6275163/pexels-photo-6275163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 3,
      },
      {
        id: 5,
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
        date: '21.05.2022',
        img: 'https://images.pexels.com/photos/5949922/pexels-photo-5949922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        rating: 5,
      },
      {
        id: 6,
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

    function random(){
      return Math.floor(Math.random() * 6);
    }
    function anotherRandomId(){
      return (randomId > 0) ? randomId - 1 : randomId + 1;
    }

    /*
    This function sorts the array <collection> descending by date and returns a new collection of the top <nrElements> elements
     */
    function sortByDate(collection, nrElements){
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
    function getRecipesByCategory(category){
      let tmpRecipes = [];
      recipes.forEach((recipe) => {
        if(recipe.categories[0] === category.name){
          tmpRecipes.push(recipe);
        }
      })
      return tmpRecipes;
    }

    export { recipes }
    export { categories }
    export { authors }
    export { posts }
    export { randomId }
    export { anotherRandomId }
    export { random }
    export { sortByDate }
    export { getRecipesByCategory }

    export default {
      data(){
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
        }
      }
    }
</script>

<style scoped>

</style>
