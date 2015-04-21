module Api
	class VisitsController < ApiController
		def index
			@visits = Visit.all.where(visitor_id: current_user.id).order(:updated_at)[0..7]
			render :index
		end	

		def update
			@visit = Visit.find(params[:id])
			if @visit.save
				render json: @visit
			else
				render json: @visit.errors.full_messages
			end
		end

		def create
			@visit = Visit.new(visitee_id: params[:visitee_id], visitor_id: current_user.id);
			puts "HERE ARE THE PARAMS"
			puts params
			if @visit.save
				render json: @visit
			else
				render json: @visit.errors.full_messages
			end
		end
	end
end