module Api
	class LikesController < ApiController
		def index
			@likes = Like.where(liker_id: current_user.id) + 
							 Like.where(likee_id: current_user.id)
			render :index
		end
		 
	end
end