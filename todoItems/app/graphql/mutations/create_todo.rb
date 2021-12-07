module Mutations
  class CreateTodo < BaseMutation
    # arguments passed to the `resolve` method
    argument :description, String, required: true
    argument :reference, String, required: true

    # return type from the mutation
    type Types::LinkType

    def resolve(description: nil, reference: nil)
      Todo.create!(
        description: description,
        reference: reference,
        )
    end
  end
end