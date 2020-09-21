class SleepsController < ApplicationController

  def new
    @sleep = Sleep.new
  end

  def create
    Sleep.create(sleep_params)
    redirect_to record_index_path
  end

  private

  def sleep_params
    params.require(:sleep).permit(:hour, :minute, :content).merge(user_id: current_user.id)
  end
end
