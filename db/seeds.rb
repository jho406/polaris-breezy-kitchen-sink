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
  { body: 'Second Act', pending: false },
  { body: 'Welcome to Marwen', pending: false },
  { body: 'Cold War', pending: false },
  { body: 'Zero', pending: false },
  { body: 'Between Worlds', pending: false},
  { body: 'The Mule', pending: false },
  { body: 'The Grinch', pending: false },
  { body: 'Moral Engines', pending: false },
  { body: 'Ralph Breaks the Internet', pending: false },
  { body: 'Homes and Watson', pending: false},
  { body: 'Vice', pending: false},
  { body: 'Destroyer', pending: false},
  { body: 'On the Basis of Sex', pending: false},
  { body: 'Stan and Ollie', pending: false},
  { body: 'Harry Potter', pending: false},
  { body: 'Body Guard', pending: false},
  { body: 'The Americans', pending: false},
  { body: 'Pose', pending: true },
  { body: 'Killing Eye', pending: true },
  { body: 'Homecoming', pending: true },
])
