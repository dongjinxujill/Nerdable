@projects.each do |project|
  json.projects do
    json.set! project.id do
      json.extract! project, :id, :title, :body, :author_id, :image, :comment_ids
    end
  end
  json.users do
    json.author_id project.author_id
    json.set! project.user.id do
      json.project_ids project.user.project_ids
    end
  end
end
