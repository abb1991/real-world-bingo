class CardsController < ApplicationController

  def new
    squares =  params[:card][:newCard].to_unsafe_h
    game = Game.create(user_id: current_user.id)
    squares.each do |id, desc|
      card = Card.new(game_id: game.id, description: desc)
      if !card.save
        render json: {error: 'Something went wrong'}
      end
    end
    cards = game.cards
    render json: cards
  end

  def update
    card = Card.find_by(id: params[:id])
    if card
      binding.pry
      card.complete = permit_params
    else
      render json: {error: 'Something went wrong'}
    end
  end

  private

  def permit_params_update
    params.require(:updateCard).permit(:complete)
  end

  def permit_params_new
    params.require(:card).permit(:newCard)
  end

  # def current_user
  #   @current_user ||= User.find_by_id(session[:user])
  # end

  # def logged_in?
  #   current_user != nil
  # end
end
