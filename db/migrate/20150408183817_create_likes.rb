class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
    	t.integer :liker_id, null: false
    	t.integer :likee_id, null: false

      t.timestamps null: false
    end

    add_index :likes, [:liker_id, :likee_id]
  end
end
