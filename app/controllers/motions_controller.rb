class MotionsController < ApplicationController

  def new
    @motion = Motion.new
    @event = Event.new
  end

  def create
    Motion.create(motion_params)
    redirect_to record_index_path
  end

  private

  def motion_params
    params.require(:motion).permit(:hour, :minute, :content).merge(user_id: current_user.id)
  end
end
