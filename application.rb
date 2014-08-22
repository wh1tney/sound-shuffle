require_relative "config/environment"

class Application < Sinatra::Base

  get "/" do
    haml :index
  end

  get "/favorites" do
    tracks = Track.all
    haml :'partials/player', locals: {tracks: tracks}
  end

  post "/favorites" do
    content_type :json

    params['faves'].each do |track_idx, info|
      Track.create(src:info["permalink_url"])
    end

    200.to_json
  end

end

Dir[File.dirname(__FILE__) + "/config/*.rb"].each { |file| require file }
