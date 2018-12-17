Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "pages#index"  # when you go to / in the browser
  get "/pages/games" => "games#index"


  get "/games/magic" => "magic#ask"

  get "/games/magic/answer" => "magic#answer"



  get "/games/secret" => "secret#guess"

  get "/games/secret/result" => "secret#result"



end
