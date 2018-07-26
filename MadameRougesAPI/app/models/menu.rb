class Menu < ApplicationRecord
  has_many :menu_items
  has_many :recipes, through: :menu_items

  validates :start_at, :end_at, presence: true

  def self.current
    Menu.all.find { |menu| menu.start_at <= Date.today && menu.end_at >= Date.today}
  end

end
