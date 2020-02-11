class QuoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :created_at, :author_id
  belongs_to :author
end
