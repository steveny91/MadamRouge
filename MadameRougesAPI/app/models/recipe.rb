class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :menu_items
  has_many :items, through: :ingredients

  validates :name, :dish_type, :difficulty, :directions, :preptime, :user, presence: true
  validates :dish_type, uniqueness: { scope: :user }
end
