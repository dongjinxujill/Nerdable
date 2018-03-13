json.array!(@projects) do |project|
  # debugger
  json.set! project.id do
    json.extract! project, :id, :title, :body, :author_id, :image
  end
end
