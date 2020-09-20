class RecordController < ApplicationController
  before_action :authenticate_user!, except: [:top, :new_guest]
  def top
  end

  def index
  end

  def show
  end

  def new

  end

  def new_guest
    user = User.find_or_create_by(email: 'guest@example.com') do |user|
      user.password = SecureRandom.urlsafe_base64
      user.nickname = "ゲストユーザー"
    end
    sign_in user
    redirect_to record_index_path, notice: 'ゲストユーザーとしてログインしました。'
  end
end
