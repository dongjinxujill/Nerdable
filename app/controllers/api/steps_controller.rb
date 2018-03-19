class Api::StepsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @steps = Step.where(project_id: params[:project_id])
  end

  def create
    @step = Step.new(step_params)
    if @step.save
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def show
    @step = Step.find(params[:id])
  end

  def update
    @step = Step.find(params[:id])
    if @step.project.author_id != current_user.id
      render json: ["not authorized"], status: 401
    end
    if @step.update(step_params)
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
  end


  private

  def step_params
    params.require(:step).permit(:title, :body, :step_number, :project_id, :image)
  end
end
