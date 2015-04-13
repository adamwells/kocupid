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

			puts "THIS IS HERE"
			puts params

			@user = @profile.user
			@user.save!(user_params)
			render :show
		end

		private

		def profile_params
			params.require(:profile).permit(:style)
		end

		def user_params
			params.require(:profile).permit(:username)
		end
	end
end
