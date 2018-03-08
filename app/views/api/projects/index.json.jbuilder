@projects.each do |project|
  json.projects do
    json.set! project.id do
      json.extract! project, :id, :title, :body, :author_id, :image
    end
  end

  json.users do
    json.set! project.user.id do
      json.extract! project.user, :username
    end
  end
end
