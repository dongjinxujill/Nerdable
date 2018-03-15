json.array!(@projects) do |project|
  json.extract! project, :id, :title, :body, :author_id, :image
end
