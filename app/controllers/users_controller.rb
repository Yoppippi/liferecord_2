class UsersController < ApplicationController

  def edit
  end

  def show
    get_week

    @user = User.find(params[:id])
    @meals = Meal.all 
    @motions = Motion.all
    @sleeps = Sleep.all
  end

  def update
    if current_user.update(user_params)
      redirect_to record_index_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:nickname, :email)
  end

  def get_week
    wdays = ['(日)','(月)','(火)','(水)','(木)','(金)','(土)']

    # Dateオブジェクトは、日付を保持しています。下記のように`.today.day`とすると、今日の日付を取得できます。
    @todays_date = Date.today - 3
    # 例) 今日が2月1日の場合・・・ Date.today.day => 1日

    @week_days = []

    # @plans = Plan.where(date: @todays_date..@todays_date + 7)

    7.times do |x|
      plans = []
      # plan = @plans.map do |plan|
        # plans.push(plan.plan) if plan.date == @todays_date + x
      # end
      days = { month: (@todays_date + x).month, date: (@todays_date + x ).day, plans: plans, wday: wdays[(@todays_date + x).wday]}
      @week_days.push(days)
    end

  end
end
