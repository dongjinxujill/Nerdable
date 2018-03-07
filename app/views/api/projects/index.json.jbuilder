@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :body, :author_id
  end
end
