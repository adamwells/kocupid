module Api
	class BookmarksController < ApiController
		def index
			@bookmarks = Bookmark.where(bookmarker_id: current_user.id) + 
							 Bookmark.where(bookmarkee_id: current_user.id)
			render :index
		end
		
		def create
			@bookmark = Bookmark.new(like_params)
			@bookmark.bookmarker_id = current_user.id
			if @bookmark.save
				render json: @bookmark
			else
				render json: @bookmark.errors.full_messages
			end
		end

		def destroy
			@bookmark = Bookmark.find(params[:id])
			if @bookmark.destroy()
				render json: @bookmark
			else
				render json: "whoops"
			end
		end

		private

		def like_params
			params.require(:bookmark).permit(:bookmarkee_id)
		end
	end
end