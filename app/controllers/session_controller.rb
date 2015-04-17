class SessionController < ApplicationController
	def new
		redirect_to '/app' if logged_in?
		@user = User.new
	end

	def create
		@user = User.find_by_credentials(user_credentials)

		if @user
			log_in!(@user)
			render json: { user_id: @user.id, profile_id: @user.profile.id }
		else
			render json: { error: "That login information couldn't be found!"}
		end
	end

	def destroy
		log_out!
		render json: { login: 'success'}
	end

  private

  def user_credentials
  	params.require(:session).permit(:login, :password)
  end
end
