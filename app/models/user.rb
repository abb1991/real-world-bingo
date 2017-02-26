class User < ApplicationRecord
  has_many :games
  has_many :cards, through: :games
  has_many :players
  has_many :friendships
  has_many :friends, :through => :friendships

  has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"
  has_many :inverse_friends, :through => :inverse_friendships, :source => :user

  has_secure_password
end
