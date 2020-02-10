class QuotesController < ApplicationController
    def index 
        quotess = Quote.all
        render json: quotes
    end

    def show
        quote = Quote.find(params[:id])
        render json: quote
    end

    def create
        quote = Quote.new(quote_params)
        if quote.save 
            render json: quote
        else 
            status: 400
        end
    end

    private
    def quote_params
        params.require(:quote).permit(:body, :author_id, :created_at)
    end 
end
