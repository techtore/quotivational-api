class Author < ApplicationRecord
    has_many :quotes
    accepts_nested_attributes_for :quotes
end
