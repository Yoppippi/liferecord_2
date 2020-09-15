class RecordController < ApplicationController
  before_action :authenticate_user!, except: [:index, :top]
  def top
  end

  def index
  end
end
