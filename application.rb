require "rubygems"
require "bundler"

class Application < Sinatra::Base
  register Sinatra::Partial

  get "/" do
    haml :index
  end
end

Dir[File.dirname(__FILE__) + "/config/*.rb"].each { |file| require file }
