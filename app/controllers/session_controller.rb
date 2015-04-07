class SessionController < ApplicationController
	def new
		@user = User.new
	end

	def create
		@user = User.find_by_credentials(user_credentials)

		if @user
			render json: @user
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
