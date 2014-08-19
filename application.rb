require "rubygems"
require "bundler"
require "sinatra"

get "/" do
  haml :index
end

Dir[File.dirname(__FILE__) + "/config/*.rb"].each { |file| require file }
