class Step < ApplicationRecord
  validates :step_number, :project_id, presence: true

  belongs_to :project, inverse_of: :steps

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
