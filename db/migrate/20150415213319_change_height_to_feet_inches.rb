class ChangeHeightToFeetInches < ActiveRecord::Migration
  def change
  	remove_column :profiles, :height
  	add_column :profiles, :height_feet, :integer
  	add_column :profiles, :height_inches, :integer
  end
end
