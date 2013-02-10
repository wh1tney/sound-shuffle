require "sinatra"
require "sinatra/r18n"
require "sinatra/partial"

class Application < Sinatra::Base
  register Sinatra::R18n
  register Sinatra::Partial

  get "/" do
    haml :index, layout: :"layouts/default"
  end
end

%w(settings helpers routes).each { |f| require_relative "config/#{f}" }
