Rails.application.routes.draw do
	root to: 'session#new'
	
  resources :users
  resources :session
  get '/app', to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
  	resources :profiles
  end
end
