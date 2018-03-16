json.project do
  json.extract! @project, :id, :title, :body, :author_id, :image
  json.createdAt @project.created_at.to_date
  json.imageUrl @project.image.url
  json.comment_ids @project.comment_ids
  json.step_ids @project.step_ids
end

@project.steps.each do |step|
  json.steps do
    json.set! step.id do
      json.extract! step, :id, :title, :body, :image, :step_number, :project_id
    end
  end
end

@project.comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
      json.createAt comment.created_at.to_date
    end
  end
end


json.users do
  @project.comments.map(&:author).each do |author|
    json.set! author.id do
      json.extract! author, :id, :username, :image
    end
  end
end


json.user do
  json.partial! 'api/users/user', user: @project.user
end
