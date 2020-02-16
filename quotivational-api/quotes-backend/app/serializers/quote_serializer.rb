class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :body, :created_at, :author_id
  belongs_to :author
end
