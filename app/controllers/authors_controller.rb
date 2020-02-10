class AuthorsController < ApplicationController

    def index 
        authors = Author.all
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
            status: 400
        end
    end
    private
    def author_params
        params.require(:author).permit(:name)
    end 

end
