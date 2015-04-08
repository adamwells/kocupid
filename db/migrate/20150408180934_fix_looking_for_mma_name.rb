class FixLookingForMmaName < ActiveRecord::Migration
  def change
  	rename_column :profiles, :looking_for_mma_figher, :looking_for_mma_fighter
  end
end
