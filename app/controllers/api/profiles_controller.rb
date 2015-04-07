module Api
	class ProfilesController < ApiController
		def index
			@profiles = Profile.all
			render :index
		end

		def show
			@profile = Profile.find(params[:id])
			render json: @profile
		end
	end
end