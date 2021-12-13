class AddMetaDataToTodos < ActiveRecord::Migration[6.1]
  def change
    add_column :todos, :created_by, :string
    add_column :todos, :updated_by, :string
    add_column :todos, :deleted_at, :timestamp
    add_column :todos, :deleted_by, :string
  end
end
