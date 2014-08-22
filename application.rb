require_relative "config/environment"

class Application < Sinatra::Base

  get "/" do
    haml :index
  end

  post "/favorites" do
    content_type :json
    tracks = []

    params['faves'].each do |track_idx, info|
      tracks << Track.create(src:info["permalink_url"])
   end

    tracks.to_json
  end
end

Dir[File.dirname(__FILE__) + "/config/*.rb"].each { |file| require file }
