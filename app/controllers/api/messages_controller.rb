module Api
	class MessagesController < ApiController
		def index
			@messages = Message.where(sender_id: current_user.id) + Message.where(recipient_id: current_user.id)
			render :index
		end

		def show
			@message = Message.find(params[:id])
			if @message.sender_id == current_user.id || @message.recipient_id == current_user.id
				render :show
			else
				render json: "you don't have access to that message"
			end
		end
	end
end