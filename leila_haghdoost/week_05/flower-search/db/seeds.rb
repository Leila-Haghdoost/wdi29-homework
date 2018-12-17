# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Garden
a1 = Garden.create title:'English Garden', built_year: 1980, image:'https://upload.wikimedia.org/wikipedia/commons/d/de/Stowe_Rotunda.jpg'

a2 = Garden.create title:'Chinese Garden', built_year: 1985, image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/20090510_Shanghai_Yuyan_6689.jpg/400px-20090510_Shanghai_Yuyan_6689.jpg'

a3 = Garden.create title:'French Garden', built_year: 1970, image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Versailles_Garden.jpg/440px-Versailles_Garden.jpg'


puts "Created #{Garden.all.length} gardens."
puts Garden.pluck(:name).join(', ')





# Flower for English Garden
Flower.create name:'Anemone', height_feet: 5, blooms_in:'Mid Spring - Mid‑Fall', features:'Deer resistant', image: 'https://proflowers.wpengine.com/wp-content/plugins/pf-flowertypes/image/summer-anemone-224501.jpg', garden_id: a1.id
Flower.create name:'Buttercup', height_feet: 2, blooms_in:'Late Spring - Early Summer', features:'Non-invasive', image:'https://proflowers.wpengine.com/wp-content/plugins/pf-flowertypes/image/buttercup-841225.jpg', garden_id: a1.id

# Flower for Chinese Garden
Flower.create name:'Crocus', height_feet: 0.3 , blooms_in:'Early Spring', features:'Non-invasive', image:'https://proflowers.wpengine.com/wp-content/plugins/pf-flowertypes/image/spring-678225.jpg',  garden_id: a2.id
Flower.create name:'Calendula', height_feet: 2, blooms_in:'Late Spring - Mid‑Fall', features:'Good for cut flowers', image:'https://proflowers.wpengine.com/wp-content/plugins/pf-flowertypes/image/marigold-437818.jpg', garden_id: a2.id

# Flower for French Garden
Flower.create name:'Morning Glory', height_feet: 10, blooms_in:'Early Summer - Early Fall', features:'Attracts hummingbirds', image:'https://proflowers.wpengine.com/wp-content/plugins/pf-flowertypes/image/sky-blue-morning-glory-8793.jpg', garden_id: a3.id


puts "Created #{Flower.all.length} flowers."
puts Flower.pluck(:title).join(', ')
