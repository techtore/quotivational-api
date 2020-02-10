class QuotesController < ApplicationController
    def index 
        quotes = Quote.all
        render json: quotes
    end

    def show
        quote = Quote.find(params[:id])
        options = {
            include: [:author, :body]
        }
        render json: QuoteSerializer.new(quote, options)
    end

    def create
        quote = Quote.new(quote_params)
        if quote.save 
            render json: quote
        # else 
        #     status: 400
        end
    end

    private
    def quote_params
        params.require(:quote).permit(:body, :author_id, :created_at)
    end 
end
