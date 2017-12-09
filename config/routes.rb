Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'posts#index'
  resources :posts

  get 'users/:id', to: 'users#show'

  scope :api, defaults: { format: :json } do
    scope :v1 do
      get 'posts', to: 'api/v1/posts#index'
      get 'posts/:id', to: 'api/v1/posts#show'
      post 'posts/:id/like', to: 'api/v1/posts#like'
      post 'posts/:id/comments/create', to: 'api/v1/comments#create'
    end
  end
end
