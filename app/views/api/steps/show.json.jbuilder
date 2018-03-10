json.set! step.id do
  json.extract! step, :id, :title, :body, :stepNumber, :image, :project_id
end
