class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
    	t.integer :bookmarker_id, null: false
    	t.integer :bookmarkee_id, null: false

      t.timestamps null: false
    end

    add_index :bookmarks, [:bookmarker_id, :bookmarkee_id]
  end
end
