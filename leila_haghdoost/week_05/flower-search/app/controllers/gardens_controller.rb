class GardensController < ApplicationController

def new
  @garden = Garden.new
end

def create
  Garden. create (garden_params)
  redirect_to(gardens_path)

end

def index
  @gardens = Garden.all

end

def show
  @garden = Garden.find params[ :id ]

end



def edit
  @garden = Garden.find params[ :id ]
end

def update
@garden = Garden.find params[ :id ]
@garden.update garden_params

redirect_to garden_path(@garden.id)
end


def destroy


  garden = Garden.find params[:id]
  garden.destroy


  redirect_to( gardens_path )

end



private
  def garden_params
    params.require(:garden).permit(:title, :built_year, :image )
  end


end
