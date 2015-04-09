module Api
	class MessagesController < ApiController
		def index
			@messages = Message.where(sender_id: current_user.id) + Message.where(recipient_id: current_user.id)
			render :index
		end
	end
end