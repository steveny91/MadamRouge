class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.datetime :start_at, null: false
      t.datetime :end_at, null: false

      t.timestamps
    end
  end
end
