Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#create
get "/flowers/new" => "flowers#new"
post "/flowers"    => "flowers#create"


#read
  get "/flowers" => "flowers#index"
  get "/flowers/:id" => "flowers#show", as: 'flower'

#Update
  get "/flowers/:id/edit" => "flowers#edit", as: 'flower_edit'

  post "/flowers/:id"     => "flowers#update"

#Delete
  get "/flowers/:id/delete" => "flowers#delete", as: 'flower_delete'



  resources :gardens
end
