module Types
  class MutationType < Types::BaseObject
    field :create_todo, mutation: Mutations::CreateTodo
    field :update_todo, mutation: Mutations::UpdateTodo
  end
end
