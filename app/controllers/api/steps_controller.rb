class Api::StepsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def show
    @step = Step.find(params[:id])
    if @step
      render :show
    else
      render json: ["non existing step"], status: 404
    end
  end

  def create
    @step = Step.new(step_params)
    if @step.project.author_id != current_user.id
      render json: ["not authorized to create"], status: 403
    end
    if @step.save
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find(params[:id])
    if @step.project.author_id != current_user.id
      render json: ["not authorized to update"], status: 403
    end
    if @step.update(step_params)
      render :show
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    if @step.project.author_id != current_user.id
      render json: ["not authorized to delete"], status: 403
    else
      @step.destroy
      render :show
    end
  end

  private
  def step_params
    params.require(:step).permit(:title, :body, :image, :project_id)
  end
end
