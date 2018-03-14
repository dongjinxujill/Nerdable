class UpdateComments < ActiveRecord::Migration[5.1]
  def change
    add_timestamps :comments, null: true

    # backfill existing record with created_at and updated_at
    # values making clear that the records are faked
    long_ago = DateTime.new(2000, 1, 1)
    Comment.update_all(created_at: long_ago, updated_at: long_ago)

    # change not null constraints
    change_column_null :comments, :created_at, false
    change_column_null :comments, :updated_at, false
  end
end
