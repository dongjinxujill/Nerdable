json.project do
  json.extract! @project, :id, :title, :body, :author_id, :image
  json.createdAt @project.created_at.to_date
  json.steps do
    @project.steps.each do |step|
      json.set! step.id do
        json.extract! step, :id, :title, :body, :image, :step_number
      end
    end
  end
end

json.user do
  json.partial! 'api/users/user', user: @project.user
end
