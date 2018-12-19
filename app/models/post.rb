class Post < ApplicationRecord
  validates :body, length: { minimum: 2 }

  def self.pending
    where(pending: true)
  end
end
