class Item < ApplicationRecord
    belongs_to :inventory

    def self.brands 
        brands = Item.all.map {|item| item.brand}

        freq = brands.each_with_object(Hash.new(0)) do |brand,hash|
            hash[brand] += 1
        end


        return {
            mostPopularBrand: brands.max_by { |brand| freq[brand] },
            sortedBrands: freq.sort_by { |brand, count| count },
            count: brands.select {|brand| brand == brands.max_by { |brand| freq[brand] }}.count
        }
    end

    def self.mostExpensiveItem
        return Item.all.sort_by {|item| item.cost}.last
    end

end
