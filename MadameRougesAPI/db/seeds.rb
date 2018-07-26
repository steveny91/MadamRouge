# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Ingredient.delete_all
Item.delete_all
Recipe.delete_all
Menu.delete_all
MenuItem.delete_all

users = []
recipes = []
items = []
menus = []

type = ["appetizer", "salad", "main course", "desserts"]
difficulty = ["easy", "medium", "hard"]
amounts = ["1/4", "1/3", "1/2", "1", "2", "3", "2.5"]
User.create(username: "MadameRouge", email: "madamerouge@gmail.com", password: "test123")

50.times do
  users << User.create!(username: Faker::Internet.user_name, email: Faker::Internet.safe_email, password: "test123")
end

users.each do |user|
  recipes << Recipe.create!(name: Faker::Food.dish, dish_type: "appetizer", difficulty: difficulty.sample, directions: Faker::Hipster.paragraph(4), preptime: Faker::Number.between(15, 120), user: user)
  recipes << Recipe.create!(name: Faker::Food.dish, dish_type: "salad", difficulty: difficulty.sample, directions: Faker::Hipster.paragraph(4), preptime: Faker::Number.between(15, 120), user: user)
  recipes << Recipe.create!(name: Faker::Food.dish, dish_type: "main course", difficulty: difficulty.sample, directions: Faker::Hipster.paragraph(4), preptime: Faker::Number.between(15, 120), user: user)
  recipes << Recipe.create!(name: Faker::Food.dish, dish_type: "desserts", difficulty: difficulty.sample, directions: Faker::Hipster.paragraph(4), preptime: Faker::Number.between(15, 120), user: user)
end

100.times do
  items << Item.create!(name: Faker::Food.ingredient)
end

recipes.each do |recipe|
  6.times do
    Ingredient.create!(recipe: recipe, item: items.sample, amount: amounts.sample, measurement: Faker::Food.metric_measurement)
  end
end

current_start = Date.today.beginning_of_week.beginning_of_day
current_end = Date.today.beginning_of_week.end_of_day+6.day

menus << Menu.create(start_at: current_start, end_at: current_end)
menus << Menu.create(start_at: current_start+7.day, end_at: current_end+7.day)
menus << Menu.create(start_at: current_start+14.day, end_at: current_end+14.day)
menus << Menu.create(start_at: current_start-7.day, end_at: current_end-7.day)
menus << Menu.create(start_at: current_start-14.day, end_at: current_end-14.day)
menus << Menu.create(start_at: current_start-21.day, end_at: current_end-21.day)
menus << Menu.create(start_at: current_start+21.day, end_at: current_end+21.day)


120.times do
  MenuItem.create!(menu: menus.sample, recipe: recipes.sample)
end
