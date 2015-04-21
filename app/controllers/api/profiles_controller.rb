module Api
	class ProfilesController < ApiController
		def index
			@profiles = Profile.where.not(id: current_user.profile.id)
			@profiles = @profiles.sort_by { |a| -a.compatibility_points(current_user) }

			if params[:page_number]
				page_num = params[:page_number].to_i
				page_size = 30
				@profiles = @profiles[((page_num * page_size))..(page_num * page_size + page_size - 1)]
			end

			@bookmarks = current_user.bookmarks
			@likes = current_user.given_likes

			render :index
		end

		def show
			@profile = Profile.find(params[:id])
			@user = @profile.user

			@like = Like.find_by({ likee_id: @user.id, liker_id: current_user.id })
			@like_id = @like ? @like.id : nil

			@bookmark = Bookmark.find_by({ bookmarkee_id: @user.id, bookmarker_id: current_user.id })
			@bookmark_id = @bookmark ? @bookmark.id : nil

			@visit = Visit.find_by({ visitee_id: @user.id, visitor_id: current_user.id })
			@visit_id = @visit ? @visit.id : nil

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
				render json: "You don't have access to that profile!"
			end
		end

		private

		def profile_params
			params.require(:profile).permit(:style,
																			:height_feet,
																			:height_inches,
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
																			:looking_for_other_genders,
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
