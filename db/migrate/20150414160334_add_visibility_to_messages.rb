class AddVisibilityToMessages < ActiveRecord::Migration
  def change
  	add_column :messages, :visible_to_sender, :boolean, default: true
  	add_column :messages, :visible_to_recipient, :boolean, default: true
  end
end
