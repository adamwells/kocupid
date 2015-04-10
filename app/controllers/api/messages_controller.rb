module Api
	class MessagesController < ApiController
		def index
			@messages = Message.where(sender_id: current_user.id) + Message.where(recipient_id: current_user.id)
			render :index
		end

		def create
			recipient = User.find_by(username: params[:recipient_username])
			@message = Message.new(recipient_id: recipient.id, sender_id: current_user.id, body: params[:body]);
			if @message.save
				render :show
			else
				render json: @message.errors.full_messages
			end
		end

		def show
			@message = Message.find(params[:id])
			if @message.sender_id == current_user.id || @message.recipient_id == current_user.id
				render :show
			else
				render json: "You don't have access to that message."
			end
		end
	end
end