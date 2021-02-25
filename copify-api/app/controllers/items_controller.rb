class ItemsController < ApplicationController
    def index
        inventory = Item.all
        render json: inventory.as_json(except: :inventory_id)
    end

    def create
        inventory = Inventory.first
        item = Item.create(
            purchase_date: params[:purchase_date],
            name: params[:name],
            brand: params[:brand],
            size: params[:size],
            cost: params[:cost],
            inventory: inventory
        )
        
        render json: item.as_json(except: :inventory_id)
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
        render json: item.as_json(except: :inventory_id)
    end

    def destroy
        item = Item.find_by(id: params[:id])
        item.destroy
    end

end
