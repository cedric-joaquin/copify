class AddTotalToInventory < ActiveRecord::Migration[6.0]
  def change
    add_column :inventories, :total, :float
  end
end
