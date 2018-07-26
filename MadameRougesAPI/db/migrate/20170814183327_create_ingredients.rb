class CreateIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :ingredients do |t|
      t.string :amount, null: false
      t.string :measurement, null: false
      t.references :recipe, index: true, null: false
      t.references :item, index: true, null: false

      t.timestamps
    end
  end
end
