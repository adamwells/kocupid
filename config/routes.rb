Rails.application.routes.draw do
	root to: 'session#new'
  resources :users
  resources :session
end
