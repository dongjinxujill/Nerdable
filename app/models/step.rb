class Step < ApplicationRecord
  validates :title, :project_id, :body, presence: true

  belongs_to :project,
  class_name: :Project,
  foreign_key: :project_id

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
