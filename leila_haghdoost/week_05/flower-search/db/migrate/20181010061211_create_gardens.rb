class CreateGardens < ActiveRecord::Migration[5.2]
  def change
    create_table :gardens do |t|
      t.text :title
      t.date :built_year
      t.text :image

      t.timestamps
    end
  end
end
