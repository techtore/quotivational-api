class QuotesController < ApplicationController
    def index 
        quotes = Quote.all
        options = {
            include: [:author, :body, :image_url]
        }
        render json: QuoteSerializer.new(quotes, options)
    end

    def show
        quote = Quote.find(params[:id])
        options = {
            include: [:author, :body, :image_url]
        }
        render json: QuoteSerializer.new(quote, options)
    end

    def create
        quote = Quote.new(quote_params)
        if quote.save 
            render json: quote, status: :created
        else 
            render json: quote.errors, status: :unprocessable_entity
        end
    end

    private
    def quote_params
        params.require(:quote).permit(:body, :author_id, :created_at, author_attributes: [:name])
    end 
end
