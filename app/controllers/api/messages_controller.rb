module Api
	class MessagesController < ApiController
		def index
			@sent_messages = Message.where(sender_id: current_user.id)
			@sent_messages = @sent_messages.where(visible_to_sender: true)
			@received_messages = Message.where(recipient_id: current_user.id)
			@received_messages = @received_messages.where(visible_to_recipient: true)
			@messages = @sent_messages + @received_messages

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

		def destroy
			@message = Message.find(params[:id])
			if @message.sender_id = current_user.id
				@message.update!(visible_to_sender: false)
			end

			if @message.recipient_id = current_user.id
				@message.update!(visible_to_recipient: false)
			end

			if !(@message.visible_to_sender || @message.visible_to_recipient)
				@message.destroy
			end

			render :show
		end
	end
end