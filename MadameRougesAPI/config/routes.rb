Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "menus#index"

  resources :menus, only: [:create, :show, :update, :destroy]
  resources :menuitems, only: [:create, :destroy]
  resources :users, only: [:new, :create]
  resources :sessions, only: [:new, :create]
  resources :recipes, only: [:create, :show, :index]
  get "/logout", to: "sessions#destroy"
  get "/madame", to: "menus#all_menus"
  get "/menus/:id", to: "menus#show"
end
