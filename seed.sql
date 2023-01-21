use MyRecipes;

/* Insert categories */
INSERT INTO categories (name) VALUES ("Sweets");
INSERT INTO categories (name) VALUES ("Vegan");
INSERT INTO categories (name) VALUES ("Vegetarian");
INSERT INTO categories (name) VALUES ("Meat");
INSERT INTO categories (name) VALUES ("Fish");

/* Insert users */
INSERT INTO users (email, password, image) VALUES ('laura.hiller@gmx.at', '788e13f68e6eb90af85e61371608f755624a77bcf70974a9a4c6c13e5728723e2bae662d606c3e3884f8b13b1b274b3a40706916745363939f6db55616834dbe', 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
INSERT INTO users (email, password, image) VALUES ('mark.corndog1337@icloud.com', '5a5dd5c9d076a58e542f1c7b12321b21f96e94220d475e578d0c864f76094ff5e7ddd322684d193416bde2bd5c1eda47e8d24df2fdf6345517517ace046e6620', 'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
INSERT INTO users (email, password, image) VALUES ('luciane1422@web.de', '374d8c57387450cb3c82e77b00de0090a590f64e8f332aa0600140d09cae1f72c30528febd5d02d56ba498e4dbd5d4744e30f4a4d951d716744b61b11bf0a9af', 'https://images.pexels.com/photos/7710127/pexels-photo-7710127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
INSERT INTO users (email, password, image) VALUES ('martinez.cathrine92@hotmail.com', '57ba8396a9a5cc3d427af6f26edf9019343738c2eeba767e380bdfe44a12e2788041e99e93ea313f4dfe200f60a6fcbfe4416eb59adbac8e0e9e672d54c24165', 'https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
INSERT INTO users (email, password, image) VALUES ('joshua.lewis@gmx.at', 'db6235bbb27eb4307032442dffcd6fede75eddf456601d49b7b2b93c592c2a9e1ee68bdf77c4359134f5e755a224c56157566545b16fb1b74b81c22e785b7be9', 'https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
INSERT INTO users (email, password, image) VALUES ('lisa.bryan@gmail.com', '8ba7101132da3e6286f761418e71aeb0a8cbebf69516ffbc723832cd02688f9bcf212fcc15ef8a382ec826d87c77c2b05e8eaa9980dfedf5eaa9032edffd1fd0', 'https://images.pexels.com/photos/6205523/pexels-photo-6205523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');

/* Insert recipes */
INSERT INTO recipes (title, description, category, author, ingredients, steps, date, image, rating) VALUES ('Viennese Kaiserschmarrn', 'The traditional Viennese Kaiserschmarrn.', 1, 1, 'Flour: 200g, Sugar: 30g, Salt: 1 pinch, Eggs: 4 pieces, Milk: 330 ml, Butter: 40g, Powdered sugar: 1 pinch', 'Mix flour, eggs, and sugar with a pinch of salt in a bowl. Grease a pan with butter and heat it up. Once the pan is heated, pour in the mixed dough and fry it golden-brown on medium heat. Cut the fried dough into quarters and then turn them. Let the turned pieces fry a little on the bottom and tear them into individual parts. To prepare the Kaiserschmarrn, refine it with a pinch of powdered sugar and enjoy it. :)', '2022-03-12', 'https://img.freepik.com/free-photo/top-view-kaiserschmarrn-with-torn-pancakes-cranberries-jam-apple-puree-table_181624-57311.jpg?t=st=1654079754~exp=1654080354~hmac=8100bae936462a6cf381ddca5a027e4b10049aa0dd805749f698b885e0f15143&w=1800', 5);
INSERT INTO recipes (title, description, category, author, ingredients, steps, date, image, rating) VALUES ('Spaghetti alla Napoli', 'The original Neapolitan recipe for spaghetti.', 3, 5, 'Spaghetti: 170 g, Tomatoes (passata): 250 g, Onion: 0.5 pieces, Garlic: 1 clove, Basil: 6 leaves, Parmesan: 30 g, Extra virgin olive oil: 2 tablespoons, Sugar: 0.5 tsp, Pepper: 1 pinch, Salt: 2 tablespoons', 'Bring a pot of salted water to a boil, cook spaghetti al dente while making the sugo. Finely chop the onion, tear the basil, and grate the Parmesan. Heat the oil in a pan, sauté the garlic then remove it and discard. Add the onion to the oil and sauté until translucent. Add the tomatoes, basil, sugar, and season with salt and pepper. Simmer for 20 minutes. Drain the spaghetti and toss with the tomato sauce and grated Parmesan. Serve it on plates', '2022-03-05', 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 4);
INSERT INTO recipes (title, description, category, author, ingredients, steps, date, image, rating) VALUES ('Fruit Cake', 'A delicious fruit cake for warm summer days.', 1, 1, 'Wheat flour: 260 g, Butter: 80 g, Sugar: 320 g, Jam: 3 tablespoons, Eggs: 3 pieces, Water: 2 tablespoons, Baking powder: 0.5 tsp, Breadcrumbs: 2 tablespoons, Cream: 350 g, Bourbon vanilla sugar: 1 package, Whipping cream stabilizer: 1 package, Fruit: 700 g, Jelly powder: 1 package, Almond flakes: 130 g', 'For the shortcrust pastry base, mix flour, sugar, and cold butter in pieces in a bowl. Knead quickly, form into a ball, and wrap and place in the refrigerator for about 30 minutes. Preheat the oven to 180 degrees Celsius (356 degrees Fahrenheit). Line the bottom of a 26 cm (10 inches) springform pan with parchment paper. Roll out the shortcrust pastry dough thinly to the size of the bottom, e.g. between foil and pre-bake for 15 minutes. Meanwhile, prepare the sponge cake dough so that it is also ready after about 15 minutes. To do this, beat eggs and water for a few minutes until light and foamy. Gradually add sugar. Mix flour with baking powder and gently fold in. Do not stir too much so that the air escapes as little as possible. After 15 minutes of baking time, remove the shortcrust pastry from the oven, spread with 2-3 tablespoons of smooth jam, spread the sponge cake dough on top and smooth it out. Bake everything together for another 20 minutes. Remove and let it cool. Then divide the sponge cake horizontally using a sharp large knife or thread, the top should be a thin layer of dough. That is, cut a thin sponge cake lid. For the filling and spreading of the edges, beat cream with vanilla sugar and sugar until stiff, adding whipping cream stabilizer. Carefully remove the lid from the sponge cake, e.g. with a cake lifter and set it aside. Spread about two thirds of the whipped cream on the bottom sponge cake, then put the thin sponge cake lid back on. Sprinkle 1-2 tablespoons of breadcrumbs on top so that the bottom does not get wet from the fruit. Prepare the fruit, wash, remove the cores, cut into cubes or slices as desired, then spread on the cake. For the jelly, mix the powder with sugar and stir in 250 ml of cold water. Bring to a boil in a small pot, let cool for a minute and spread evenly with a spoon over the fruit. Roast the almond flakes in a pan without fat until they are slightly colored and fragrant. Let cool and sprinkle on top of the cake. Enjoy!', '2022-03-15', 'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 4);
INSERT INTO recipes (title, description, category, author, ingredients, steps, date, image, rating) VALUES ('Ahi Tuna Steaks', 'Tasty Tuna Steaks on a Vegetable Bed', 5, 4, 'Ahi Tuna Steaks (sushi quality): 2 pieces, Oil, neutral or seasoned wok oil: 2 tablespoons, Pepper, whole (Szechuan pepper): 2 teaspoons, Salt (best Fleur de Sel): 1 teaspoon, Cayenne pepper: 1 pinch', 'Wash the tuna steaks and pat dry. In a mortar, crush the Szechuan pepper seeds with a little cayenne pepper and salt and season the tuna with it. In my opinion, absolutely no lemon or similar is required! Heat a grill pan or normal pan with the oil and fry the tuna so that it is still raw inside. Rice and salad go well with it.', '2022-05-27', 'https://www.simplyrecipes.com/thmb/h3vmpNn2nfPoejM2eu7GlF4nmhw=/3900x2600/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Seared-Ahi-Tuna-LEAD-2-7d0de98ff4b94257b2a665357a2940df.jpg', 4);
INSERT INTO recipes (title, description, category, author, ingredients, steps, date, image, rating) VALUES ('Berry Punch', 'The perfect hot drink for a cozy feeling in the cold season.', 1, 6, 'Water: 1.8 liters, Berry juice: 700 ml, Orange juice: 600 ml, Cinnamon stick: 1 piece, Cinnamon clove: 3 pieces, Berry tea: 5 tea bags, Rum: 100 ml, Red wine: 100 ml, Sugar: 1.5 tablespoons, Frozen blueberries: 60 grams, Frozen raspberries: 50 grams, Frozen strawberries: 120 grams', 'First, bring the water to a boil in a large pot. Then, let all the tea bags steep with the cinnamon cloves and the stick for 9 minutes. Afterwards, remove the tea bags, cinnamon stick and cloves. Now, add in the berries and sugar. Afterwards, add in the rum, red wine, orange juice, and berry juice. Allow the punch to boil again briefly, then fill it into cups.', '2022-12-19', 'https://cdn.pixabay.com/photo/2016/11/28/21/58/punch-1866144_1280.jpg', 5);
INSERT INTO recipes (title, description, category, author, ingredients, steps, date, image, rating) VALUES ('Lasagna Bolognese', 'A lasagna made with lasagna sheets, a creamy béchamel sauce, and a Bolognese ragu.', 4, 2, 'Garlic: 1 clove, Onion: 1, Carrots: 2 pieces, Ground beef: 500 g, Can of diced tomatoes: 800 g, Dried oregano: 2 tsp, Unsalted butter: 50 g, Flour: 40 g, Milk: 500 ml, Ground nutmeg: 0.25 tsp, Lasagna sheets: 150 g, Parmesan cheese: 60 g, Olive oil: 10 ml, Salt: 1 tsp, Pepper: 1 pinch', 'Finely chop the garlic. Peel and dice the onion and carrots. Heat some olive oil in a large pan and sauté the onions, carrots, and garlic. Cook the ground beef evenly with the help of a cooking spoon. Season with salt and pepper. Add the diced tomatoes and season again with salt and pepper. Cook with a closed lid on medium heat for about 15-20 minutes. Add the dried oregano. Preheat the oven to 200°C. For the béchamel sauce, melt the butter in a small pot. Add the flour and roast while stirring. Gradually add the cold milk while stirring and reduce the heat for about 5-8 minutes. Season with nutmeg, salt, and pepper. Grease the bottom of the baking dish with olive oil and cover it with a layer of béchamel. Now add a layer of lasagna sheets, then the Bolognese, more béchamel sauce, and Parmesan. Repeat until all ingredients are used. Finish with the remaining béchamel. Add the remaining Parmesan and bake in a preheated oven at 200°C/390°F on the middle shelf for about 30-40 minutes, or until the top is golden. Serve in the hot baking dish. Enjoy!', '2022-05-21', 'https://images.pexels.com/photos/5949922/pexels-photo-5949922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 3);
INSERT INTO recipes (title, description, category, author, ingredients, steps, date, image, rating) VALUES ('Caesar Salad', 'The basic recipe for one of the most famous salads worldwide.', 2, 4, 'Baguette (for croutons): 1 piece, Olive oil (for croutons): 2 tablespoons, Garlic clove (for croutons): 1 piece, Garlic cloves: 1 piece, Parmesan (freshly grated): 20 g, Red wine vinegar: 1 tablespoon, Dijon mustard: 1 teaspoon, Olive oil: 80 ml, Romaine lettuce: 1 head, Pepper: 1 pinch, Egg yolks: 2 pieces, Onion: 2 pieces', 'For the croutons, cut the baguette into small cubes. Heat the oil in a large pan. Peel and press the garlic clove and add it to the oil- stir. Turn down the heat and add the bread cubes to the pan. Brown lightly on all sides while stirring constantly. Then let cool on a plate. For the dressing, finely chop the 2 anchovies, roughly chop the garlic cloves. In a narrow, tall container, mix anchovies, garlic, Parmesan, vinegar, mustard, and egg yolks with a hand mixer until smooth. Add the oil in a fine stream while continuing to mix until a creamy sauce is formed. Season with pepper to taste. Clean and wash the romaine lettuce. Tear the leaves into bite-sized pieces.', '2022-05-01', 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 4);

/* Insert events */
INSERT INTO events (recipe, color, date, author) VALUES (5, '#d21d1d', '2023-01-20', 1);
INSERT INTO events (recipe, color, date, author) VALUES (3, '#523754', '2023-01-21', 1);
INSERT INTO events (recipe, color, date, author) VALUES (1, '#18243b', '2023-01-22', 1);
INSERT INTO events (recipe, color, date, author) VALUES (2, '#3653ce', '2023-01-23', 1);
INSERT INTO events (recipe, color, date, author) VALUES (4, '#628f12', '2023-01-24', 1);
INSERT INTO events (recipe, color, date, author) VALUES (6, '#18243b', '2023-01-25', 1);
