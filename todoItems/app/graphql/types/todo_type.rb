module Types
  class TodoType < Types::BaseObject
    field :id, ID, null: false
    field :description, String, null: false
    field :reference, String, null: false
  end
end
