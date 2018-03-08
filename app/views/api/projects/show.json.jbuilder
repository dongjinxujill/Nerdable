json.project do
  json.extract! @project, :id, :title, :body, :author_id, :image
  json.createdAt @project.created_at.to_date
end

json.user do
  json.partial! 'api/users/user', user: @project.user
end
