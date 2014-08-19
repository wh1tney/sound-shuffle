source "https://rubygems.org"
ruby '2.0.0'

gem "sinatra", github: "sinatra"
gem "sinatra-partial"

# Use Thin for our web server
gem "thin"

gem "haml"
gem "sass"
gem "coffee-script"

# PostgreSQL driver
gem 'pg'

gem 'activesupport'
gem 'activerecord'

gem 'rake'
gem 'shotgun'

group :test do
  gem 'rack-test'
  gem 'rspec'
  gem 'factory_girl'
end

group :test, :development do
  gem 'faker'
end
