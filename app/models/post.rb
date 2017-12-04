class Post < ApplicationRecord
  acts_as_votable
  belongs_to :user
  has_many :comments, -> { order 'created_at desc' }, dependent: :destroy

  validates :image, presence: true
  has_attached_file :image, styles: {  medium: '720x' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
