json.set! @step.id do
  json.extract! @step, :id, :title, :body, :step_number, :image
end
