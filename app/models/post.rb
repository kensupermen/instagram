class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates :image, presence: true
  has_attached_file :image, styles: { small: '320x', medium: '720x', large: '1080x', hd: '1920x' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
