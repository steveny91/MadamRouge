class Ingredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :item

  validates :amount, :measurement, :recipe, :item, presence: true

end
