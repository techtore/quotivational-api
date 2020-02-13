class Quote < ApplicationRecord
    belongs_to :author

    validates :body, presence: true, uniqueness: true

end
