class AddNonGenderBinaryOptionToProfile < ActiveRecord::Migration
  def change
  	add_column :profiles, :looking_for_other_genders, :boolean, default: true
  end
end
