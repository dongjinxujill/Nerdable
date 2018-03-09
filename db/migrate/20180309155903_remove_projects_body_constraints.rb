class RemoveProjectsBodyConstraints < ActiveRecord::Migration[5.1]
  def change
    change_column :projects, :body, :string, null: true
  end
end
