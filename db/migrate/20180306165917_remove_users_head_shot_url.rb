class RemoveUsersHeadShotUrl < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :headshot_url
  end
end
