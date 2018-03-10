class Step < ApplicationRecord
  validates :project_id, :step_number, presence: true

  belongs_to :project

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
