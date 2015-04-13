module Api
	class ProfilesController < ApiController
		def index
			@profiles = Profile.where.not(id: current_user.profile.id)
			render :index
		end

		def show
			@profile = Profile.find(params[:id])
			@user = @profile.user
			@like = Like.find_by({ likee_id: @user.id, liker_id: current_user.id })
			@like_id = @like ? @like.id : nil
			render :show
		end

		def update
			@profile = Profile.find(params[:id])
			@user = @profile.user

			@user.update(user_params)
			@profile.update(profile_params)

			render :show
		end

		private

		def profile_params
			params.require(:profile).permit(:style)
		end

		def user_params
			params.permit(:username)
		end
	end
end
