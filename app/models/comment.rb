class Comment < ApplicationRecord
  validates :body, :author_id, :project_id, presence: true

  belongs_to :author,
  class_name: :User,
  foreign_key: :author_id


  belongs_to :project,
  class_name: :Project,
  foreign_key: :author_id

end
