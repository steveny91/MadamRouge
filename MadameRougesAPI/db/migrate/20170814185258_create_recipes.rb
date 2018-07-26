class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :dish_type, null: false
      t.string :difficulty, null: false
      t.text :directions, null: false
      t.string :preptime, null: false
      t.references :user, null: false

      t.timestamps
    end

  end
end
