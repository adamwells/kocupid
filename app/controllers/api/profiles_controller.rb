module Api
	class ProfilesController < ApiController
		def index
			@profiles = Profile.all
			render json: @profiles
		end

		def show
			@profile = Profile.find(params[:id])
			render :show
		end
	end
end