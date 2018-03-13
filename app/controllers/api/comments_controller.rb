class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @comments = Comment.where(project_id: params[:project_id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :index
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.author_id != current_user.id
      render json: ["not authorized to edit comment"], status: 422
    elsif @comment.update(comment_params)
      render :index
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.author_id != current_user.id
      render json: ["not authorized to delete comment"], status: 422
    else
      @comment.destroy
      render :index
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:project_id, :body)
  end
end
