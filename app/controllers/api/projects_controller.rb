class Api::ProjectsController < ApplicationController
  def show
    
  end

  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def project_param
    params.require(:project).permit(:title, :body)
  end
end
