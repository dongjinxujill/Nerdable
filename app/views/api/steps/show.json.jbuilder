json.set! @step.id do
  json.extract! @step, :id, :title, :body: :project_id, :image, :step_number
end
