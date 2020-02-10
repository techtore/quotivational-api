class AuthorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :quotes
end
