class Author < ApplicationRecord
    has_many :quotes, :dependent => :destroy
    accepts_nested_attributes_for :quotes
    validates :name, presence: true, uniqueness: true

end
