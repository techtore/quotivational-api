class AuthorsController < ApplicationController

    def index 
        authors = Author.all
        # options = {
        #     include: [:name]
        # }
        render json: authors
    end

    def show
        author = Author.find(params[:id])
       
        render json: author
    end

    def create
        author = Author.new(author_params)
        if author.save 
            render json: author
        else 
        render json: author.errors, status: :unprocessable_entity
        end
    end
    private
    def author_params
        params.require(:author).permit(:name, quotes_attributes: [:body])
    end 

end
