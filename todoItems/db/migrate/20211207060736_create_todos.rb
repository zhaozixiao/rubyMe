class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.text :description
      t.string :reference

      t.timestamps
    end
  end
end
