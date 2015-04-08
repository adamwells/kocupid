module Api
	class LikesController < ApiController
		def index
			@likes = Like.where(liker_id: current_user.id) + 
							 Like.where(likee_id: current_user.id)
			render :index
		end
		
		def create
			@like = Like.new(like_params)
			@like.liker_id = current_user.id
			if @like.save
				render json: @like
			else
				render json: @like.errors.full_messages
			end

		end

		private

		def like_params
			params.require(:like).permit(:likee_id)
		end
	end
end