Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index,:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, except: [:new, :edit] do
      get "search", on: :collection
      resources :comments, only: [:index]
    end
    resources :comments, except:[:new, :edit, :show, :index]
    resources :steps, except: [:new, :edit]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
