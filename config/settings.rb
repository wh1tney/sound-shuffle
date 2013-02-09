class Application < Sinatra::Base
  configure do
    enable :dump_errors
    enable :logging
    set :views, sass: "public/css", coffee: "public/js", haml: "views", default: "views"
  end

  configure :production do
    set :haml, ugly: true
  end
end
