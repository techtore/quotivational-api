# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Author.delete_all
Quote.delete_all

author_a = Author.create(name: 'Rumi')
quote_a = Quote.create(body: "Stop acting so small. You are the universe in ecstatic motion.", author: author_a)
