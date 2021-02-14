class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.date :purchase_date
      t.string :name
      t.string :brand
      t.string :size
      t.float :cost

      t.timestamps
    end
  end
end
