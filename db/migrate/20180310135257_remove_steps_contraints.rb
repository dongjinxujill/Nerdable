class RemoveStepsContraints < ActiveRecord::Migration[5.1]
  def change
    change_column :steps, :project_id, :integer, null: true
  end
end
