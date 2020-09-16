Rails.application.routes.draw do
  devise_for :users
  root to: "record#top"
  resources :users, only: [:edit, :update]
  resources :record

  post '/record/guest_sign_in', to: 'record#new_guest'
end
