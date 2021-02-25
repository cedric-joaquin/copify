class InventoryController < ApplicationController

    def index
        inventory = Inventory.first
        render json: inventory
    end


end