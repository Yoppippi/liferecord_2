class RecordController < ApplicationController
  before_action :authenticate_user!, except: [:top, :new_guest]
  def top
  end

  def index
    @drink = Drink.all.sum(:amount)
  end

  def show
    
  end

  def new
    @drink = Drink.new
  end

  def create 
    Drink.create(drink_params)
    redirect_to record_index_path
  end

  def new_guest
    user = User.find_or_create_by(email: 'guest@example.com') do |user|
      user.password = SecureRandom.urlsafe_base64
      user.nickname = "ゲストユーザー"
    end
    sign_in user
    redirect_to record_index_path, notice: 'ゲストユーザーとしてログインしました。'
  end

  private

  def drink_params
    params.permit(:amount).merge(user_id: current_user.id)
  end
end
