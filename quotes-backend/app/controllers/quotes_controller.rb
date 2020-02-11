class QuotesController < ApplicationController
    def index 
        quotes = Quote.all
      
        render json: quotes, include: [:author]
    end

    def show
        quote = Quote.find(params[:id])
       
        render json: quote, include: [:author]
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
