class FlowersController < ApplicationController
   skip_before_action :verify_authenticity_token, raise: false


  def new
    @flower = Flower.new
  end


  def create
    Flower.create flower_params
  redirect_to( flowers_path)
end

  # 1 = Read
  def index
    @flowers= Flower.all
  end

  # 2 = Read
  def show
    @flower = Flower.find params[:id]
  end

 # 3 = Update
  def edit
    @flower = Flower.find params[:id]
  end

  def update
    flower = Flower.find params[:id]
    flower.update(
    name: params[:name],
    image: params[:image],
    height_feet: params[:height_feet],
    blooms_in: params[:blooms_in],
    features: params[:features]
    )
    redirect_to( flower_path(flower.id) )

  end

  def delete
    flower = Flower.find params[:id]
    flower.delete


    redirect_to( flowers_path )
  end

  private
  def flower_params
    params.require(:flower).permit(:name, :blooms_in, :features, :image, :garden_id)
  end

end
