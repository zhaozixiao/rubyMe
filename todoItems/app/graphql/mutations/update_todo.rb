require 'time'

module Mutations
  class UpdateTodo < BaseMutation
    # arguments passed to the `resolve` method
    argument :user, String, required: true
    argument :id, ID, required: true
    argument :description, String, required: false
    argument :status, String, required: false
    validates required: { one_of: [:description, :status] }
    # return type from the mutation
    type Types::TodoType

    def resolve(**inputs)
      todo = Todo.find_by!(id: inputs[:id])
      if inputs[:description] != nil
        todo.update!(description: inputs[:description],
                     updated_by: inputs[:user],
                     updated_at: Time.now())
      elsif inputs[:status] != nil
        todo.update!(status: inputs[:status],
                     updated_by: inputs[:user],
                     updated_at: Time.now())
      end
      return todo
    end
  end
end