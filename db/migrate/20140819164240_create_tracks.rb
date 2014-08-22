class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :src
      t.timestamps
    end
  end
end
