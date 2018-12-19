# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create([
  { body: 'Star Wars', pending: false },
  { body: 'Lord of the Rings', pending: false },
  { body: 'Spider Man', pending: false},
  { body: 'Aquaman', pending: false},
  { body: 'Bumblebee', pending: false},
  { body: 'Mary Poppins', pending: false},
  { body: 'Mary Poppins Returns', pending: false},
  { body: 'Second Act', pending: true },
  { body: 'Welcome to Marwen', pending: true },
  { body: 'Cold War', pending: true },
  { body: 'Zero', pending: true },
  { body: 'Between Worlds', pending: true },
  { body: 'The Mule', pending: true },
  { body: 'The Grinch', pending: true },
  { body: 'Moral Engines', pending: true },
  { body: 'Ralph Breaks the Internet', pending: true },
  { body: 'Homes and Watson', pending: true },
  { body: 'Vice', pending: true },
  { body: 'Destroyer', pending: true },
  { body: 'On the Basis of Sex', pending: true },
  { body: 'Stan and Ollie', pending: true },
  { body: 'Harry Potter', pending: true },
  { body: 'Body Guard', pending: true },
  { body: 'The Americans', pending: true },
  { body: 'Pose', pending: true },
  { body: 'Killing Eye', pending: true },
  { body: 'Homecoming', pending: true },
])
