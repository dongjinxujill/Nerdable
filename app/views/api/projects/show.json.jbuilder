json.project do
  json.extract! @project, :id, :title, :body
  json.createdAt @project.created_at.to_date
end

json.author do
  json.partial! 'api/users/user', user: @project.user
end
