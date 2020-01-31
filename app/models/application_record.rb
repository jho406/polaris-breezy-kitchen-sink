class ApplicationRecord < ActiveRecord::Base
  def self.member_at(index)
    offset(index).limit(1).first
  end

  def self.member_by(attr, value)
    find_by(Hash[attr, val])
  end

  def self.member_key
    "id"
  end

  self.abstract_class = true
end
