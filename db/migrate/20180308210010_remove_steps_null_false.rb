class RemoveStepsNullFalse < ActiveRecord::Migration[5.1]
  def change
    add_column :steps, :step_number, :integer
    change_column :steps, :title, :string, :null => true
    change_column :steps, :body, :string, :null => true
  end
end
