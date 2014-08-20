class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :track_id, :title, :user, :artwork_url, :waveform_url 
      t.timestamps
    end
  end
end
