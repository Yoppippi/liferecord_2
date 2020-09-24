Rails.application.routes.draw do
  devise_for :users
  root to: "record#top"
  resources :users
  
  resources :record do
    collection do
      delete 'destroy_all'
    end
  end

  resources :meals
  resources :sleeps
  resources :motions
  resources :drink

  post '/record/guest_sign_in', to: 'record#new_guest'
end
