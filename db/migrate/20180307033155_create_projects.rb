class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :body, null: false
      t.timestamps
    end
    add_index :projects, :title
    add_index :projects, :author_id
  end
end
