Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'posts#index'
  resources :posts
  scope :api, defaults: { format: :json } do
    scope :v1 do
      get 'posts/list', to: 'api/v1/posts#index'
    end
  end
end
