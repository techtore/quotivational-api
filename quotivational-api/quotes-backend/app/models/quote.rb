class Quote < ApplicationRecord
    belongs_to :author
    accepts_nested_attributes_for :author
    validates :body, presence: true, uniqueness: true
end
