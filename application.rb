require_relative "config/environment"

class Application < Sinatra::Base

  get "/" do
    haml :index
  end

  post "/favorites" do
    content_type :json
    tracks = []

    params['faves'].each do |track_idx, info|
      tracks << Track.create(track_id:info["id"], title:info["title"], user:info["user"]["username"], artwork_url:info["artwork_url"], waveform_url:info["waveform_url"])
    end

    tracks.to_json
  end
end

Dir[File.dirname(__FILE__) + "/config/*.rb"].each { |file| require file }
