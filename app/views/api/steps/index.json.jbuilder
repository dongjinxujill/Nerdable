@steps.each do |step|
  json.steps do
    json.set! step.id do
      json.extract! step, :title, :body, :image, :project_id, :step_number
    end
  end
end
