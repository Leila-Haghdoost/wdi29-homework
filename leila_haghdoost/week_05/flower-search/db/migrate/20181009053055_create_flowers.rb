class CreateFlowers < ActiveRecord::Migration[5.2]
  def change
    create_table :flowers do |t|
      t.text :name
      t.text :image
      t.float :height_feet
      t.text :blooms_in
      t.text :features
    end
  end
end
