module Api
	class ProfilesController < ApiController
		def index
			@profiles = Profile.all
			render :index
		end

		def show
			@profile = Profile.find(params[:id])
			@user = @profile.user
			@liked = current_user.likees.include?(@user)
			render :show
		end
	end
end