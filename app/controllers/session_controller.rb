class SessionController < ApplicationController
	def new
		redirect_to '/app' if logged_in?
		@user = User.new
	end

	def create
		@user = User.find_by_credentials(user_credentials)

		if @user
			log_in!(@user)
			redirect_to '/app'
		else
			render text: "That login info couldn't be found!"
		end
	end

	def destroy
	end

  private

  def user_credentials
  	params.require(:user).permit(:login, :password)
  end
end
