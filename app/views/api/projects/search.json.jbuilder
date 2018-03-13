json.array!(@projects) do |project|
  # debugger
  json.extract! project, :id, :title, :body, :author_id, :image

end
