class CreateMenuItems < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_items do |t|
      t.references :menu, index: true, null: false
      t.references :recipe, index: true, null: false

      t.timestamps
    end
  end
end
