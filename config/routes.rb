Rails.application.routes.draw do
	root to: 'static_pages#root'
	
  resources :users
  resources :session
  get '/app', to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
  	resources :profiles
  	resources :likes
    resources :bookmarks
  	resources :messages
  end
end
