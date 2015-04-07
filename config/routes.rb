Rails.application.routes.draw do
	root to: 'session#new'
  resources :users
  resources :session

  namespace :api, defaults: { format: :json } do
  	resources :profiles
  end
end
