json.array!(@projects) do |project|
  json.set! project.id do
    json.(project, *Project.column_names)
  end
end
