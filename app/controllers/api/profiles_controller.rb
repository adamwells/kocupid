module Api
	class ProfilesController < ApiController
		def index
			@profiles = Profile.all
			render :index
		end

		def show
			@profile = Profile.find(params[:id])
			@user = @profile.user
			@like = Like.find_by({ likee_id: @user.id, liker_id: current_user.id })
			@like_id = @like ? @like.id : nil
			render :show
		end
	end
end