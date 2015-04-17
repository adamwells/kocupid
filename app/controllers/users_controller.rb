class UsersController < ApplicationController
	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)

		if @user.save
			log_in!(@user)
			Profile.create!(user_id: @user.id);
			render json: {username: @user.username }
		else
			render json: { messages: @user.errors.full_messages }, status: 401
		end


	end

	private

	def user_params
		params.permit(:email, :username, :password)
	end
end
