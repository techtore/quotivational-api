class QuoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :image_url, :created_at, :author_id
  belongs_to :author
end
