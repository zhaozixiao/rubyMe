class AddStatusToTodos < ActiveRecord::Migration[6.1]
  def change
    execute <<-SQL
      CREATE TYPE todo_status AS ENUM ('ACTIVE', 'COMPLETE', 'DELETED');
    SQL
    add_column :todos, :status, :todo_status, null: false, default: "ACTIVE"
  end
end
