class Project < ApplicationRecord
  validates :title, :author_id, :image, presence: true

  belongs_to :user,
  class_name: :User,
  foreign_key: :author_id

  has_many :steps, inverse_of: :project

  has_attached_file :image, :styles => { :small => "160x160>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
