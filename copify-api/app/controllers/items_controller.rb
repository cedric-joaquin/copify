class ItemsController < ApplicationController

    def index
        inventory = Item.all
        render json: inventory
    end

    def create
        item = Item.create(
            purchase_date: params[:purchase_date],
            name: params[:name],
            brand: params[:brand],
            size: params[:size],
            cost: params[:cost]
        )
        render json: item
    end

    def update
        item = Item.find_by(id: params[:id])
        item.update(
            purchase_date: params[:purchase_date],
            name: params[:name],
            brand: params[:brand],
            size: params[:size],
            cost: params[:cost]
        )
        render json: item
    end

    def destroy
        binding.pry
        item = Item.find_by(id: [params:id])
        item.destroy
    end

end
