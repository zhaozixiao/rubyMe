module Types
  class MutationType < Types::BaseObject
    field :create_todo, mutation: Mutations::CreateTodo
    field :update_todo, mutation: Mutations::UpdateTodo
    field :create_user, mutation: Mutations::CreateUser
    field :signin_user, mutation: Mutations::SignInUser
  end
end
