class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.integer :project_id, null: false
      t.string :body, null: false
      t.timestamps
    end
    add_index :steps, :project_id
  end
end
