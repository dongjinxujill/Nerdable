class Step < ApplicationRecord
  validates :step_number, :project_id, presence: true

  belongs_to :project, inverse_of: :steps

  has_attached_file :image, default_url: "https://s3.us-east-2.amazonaws.com/rule-seeds/missing-715826.gif"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
