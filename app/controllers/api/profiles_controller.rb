module Api
	class ProfilesController < ApiController
		def index
			if current_user.profile
				@profiles = Profile.where.not(id: current_user.profile.id)
			else
				@profiles = Profile.all
			end
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
			if current_user.profile.id = params[:id]
				@profile = Profile.find(params[:id])
				@user = @profile.user

				@user.update(user_params)
				@profile.update(profile_params)

				render :show
			else
				render json: "Nice try."
			end
		end

		private

		def profile_params
			params.require(:profile).permit(:style,
																			:height,
																			:weight,
																			:self_summary,
																			:good_at,
																			:message_if,
																			:looking_for_wrestler,
																			:looking_for_boxer,
																			:looking_for_mma_fighter,
																			:looking_for_other_styles,
																			:looking_for_men,
																			:looking_for_women,
																			:looking_for_sparring_partner,
																			:looking_for_opponent,
																			:body_type,
																			:weight_class,
																			:photo_url)
		end

		def user_params
			params.permit(:username)
		end
	end
end
