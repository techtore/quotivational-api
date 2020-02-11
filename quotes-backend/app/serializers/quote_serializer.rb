class QuoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :created_at
  belongs_to :author
end
