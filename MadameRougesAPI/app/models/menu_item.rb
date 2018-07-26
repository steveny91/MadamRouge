class MenuItem < ApplicationRecord
  belongs_to :recipe
  belongs_to :menu

  validates :menu, :recipe, presence: true
end
