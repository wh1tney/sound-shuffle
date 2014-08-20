require 'spec_helper'

describe "SoundCloud API connection" do
  describe "POST /favorites" do
    it "responds successfully" do
      Track.delete_all
      post '/favorites', {'faves' => {'0' => {track_id:123, title:"Foo", user:"Bar", artwork_url:"www.google.com", waveform_url:"www.google.com"}}}
      expect(last_response.status).to eq(200)
    end
  end
 
  describe "POST /favorites" do
    it "should create a new Track object" do
      Track.delete_all
      expect {
        post '/favorites', {'faves' => {'0' => {track_id:123, title:"Foo", user:"Bar", artwork_url:"www.google.com", waveform_url:"www.google.com"}}}
      }.to change(Track, :count)      
    end
  end
end
