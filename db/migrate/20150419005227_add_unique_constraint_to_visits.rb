class AddUniqueConstraintToVisits < ActiveRecord::Migration
  def change
  	add_index :visits, [:visitor_id, :visitee_id], unique: true
  end
end
