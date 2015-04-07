class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
    	t.integer :user_id, null: false
    	t.string :photo_url
    	t.text :self_summary
    	t.text :good_at
    	t.text :message_if
    	t.integer :height
    	t.integer :weight
    	t.string :body_type
    	t.string :weight_class
    	t.string :style
    	t.boolean :looking_for_wrestler, default: true
    	t.boolean :looking_for_boxer, default: true
    	t.boolean :looking_for_mma_figher, default: true
    	t.boolean :looking_for_other_styles, default: true
    	t.boolean :looking_for_women, default: true
    	t.boolean :looking_for_men, default: true
    	t.boolean :looking_for_opponent, default: true
    	t.boolean :looking_for_sparring_partner, default: true

      t.timestamps null: false
    end

    add_index :profiles, :user_id, unique: true
    add_foreign_key :profiles, :users
  end
end
