class AddImageUrlToQuotes < ActiveRecord::Migration[6.0]
  def change
    add_column :quotes, :image_url, :string
  end
end
