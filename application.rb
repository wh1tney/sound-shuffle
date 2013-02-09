require "sinatra"

class Application < Sinatra::Base
  get "/" do
    haml :index, layout: :"layouts/default"
  end
end

require_relative "config/settings"
require_relative "config/helpers"
require_relative "config/routes"
Application.helpers ApplicationHelpers
