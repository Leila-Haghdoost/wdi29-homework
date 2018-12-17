class AddGardenIdToFlowers < ActiveRecord::Migration[5.2]
  def change
    add_column :flowers, :garden_id, :integer
  end
end
