class Comment < ApplicationRecord
  validates :body, :author_id, :project_id, presence: true

  belongs_to :user,
  class_name: :User,
  foreign_key: :author_id


  belongs_to :project,
  class_name: :Project,
  foreign_key: :author_id


  has_many :steps, inverse_of: :project


end
