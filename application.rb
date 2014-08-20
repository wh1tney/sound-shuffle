require_relative "config/environment"

class Application < Sinatra::Base

  get "/" do
    haml :index
  end

  post "/favorites" do
    content_type :json
        
    track = params['faves']['0']

    p "#{track["id"]}\n#{track["title"]}\n#{track["user"]["username"]}\n#{track["artwork_url"]}\n#{track["waveform_url"]}"
        
    params['faves'].each do |track_idx, info|
      track = Track.create(track_id: info["id"], )
    end

    params.to_json
  end
end

Dir[File.dirname(__FILE__) + "/config/*.rb"].each { |file| require file }
