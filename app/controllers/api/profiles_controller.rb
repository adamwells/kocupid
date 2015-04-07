module Api
	class ProfilesController < ApiController
		def index
			@profiles = Profile.all
			render json: @profiles
		end
	end
end